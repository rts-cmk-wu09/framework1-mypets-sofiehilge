import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function useAxios(endpoint, state, id = "") {
  /*det her skrives hvilket endpoint der skal sendes med. */
  const [data, setData] = useState(null);
  const [error, setError] =
    useState(null); /* null, false, undefined er falsy værdier */
  const [loading, setLoading] =
    useState(
      true
    ); /* Vi sætter loading state igang med det samme, for det vil trigge en opdatering af contexten */
  const [context, setContext] = useOutletContext();

  useEffect(() => {
    const getResponse = async () => {
      try {
        if (!context.token || Math.floor(Date.now() / 1000) > context.expire) {
          const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            JSON.stringify({
              grant_type: "client_credentials",
              client_id: "CvI88lmSmxr4HkhwEwvnLJftOaGkGqA5KEHUyiZqG2HydpQaNb",
            }),
            { headers: { "content-type": "application/json" } }
          );
          const data = await response.data;
          setContext({
            token: data.access_token,
            expire: data.expires_in + Math.floor(Date.now() / 1000),
          });
        } else {
          /* Når token er blevet returneret, så opdatere vi vores data variable med setData metode */
          const nextResponse = await axios.get(
            id
              ? `https://api.petfinder.com/v2/${endpoint}/${id}`
              : `https://api.petfinder.com/v2/${endpoint}/` /* Ændre her til ${endpoint} så vi kan vælge mellem types og animals. */,
            {
              headers: {
                Authorization: "Bearer " + context.token,
              },
            }
          );
          const nextData = nextResponse.data;
          setData(nextData); /* Er der data, så fjerner vi loading */
          setLoading(false);
        }
      } catch (err) {
        /* Hvis der er en error, så sætter vi den til error. */
        setError(err);
      }
    };
    getResponse();
  }, [
    context,
    state,
  ]); /* Indsæt state her, for at den rerender get requesten. fordi at requesten som udgangspunkt kun vil køre en gang. */
  /* HVis context opdateres så kør hele møllen igen. If: spørger om der er et token og hvis ikke  der er et token så hent et, med udløb om en time
  else: siger hent dataen */

  return [data, error, loading];
  // retuner et array med data, error og loadingstate
}

export default useAxios;
