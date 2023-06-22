import Header from "../templates/Header";

import styled from "styled-components";
import AnimalCard from "../templates/AnimalCard";
import Footer from "../templates/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";
import Paragraf from "../components/Paragraf";
import ErrorView from "./ErrorView";
import LoadingView from "./LoadingView";



const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* display: grid;
  position: fixed;
  width: calc(100vw - 4rem);
  padding: 0 2rem;
  background-color: #fff;
  height: 60px;
  grid-template-columns: 1fr 1fr 1fr; */
`;

const ListView = (props) => {
  /*   const [type, setType] = useState("Cat");
  const [data, error, loading] = useAxios(`animals?type=${type}`, type); */
  /* Vi skal hente to forskellige endpoints, et til typer og et til animalæs*/
  /*   const [typeData, typeError, typeLoading] = useAxios("types"); */
  /* useAxios referere til type i vores useState som, som udgangspunkt er animals. */

  /* når data kommer tilbage er vi nødt til at have et state der opdatere sig. Data skal opdatere et state, så den kan lave et rerender igen */
  return (
    /* Hver gang knappen trykkes på skal typerne vises. Vi har en variable der skal kunne ændre sig, derfor skal det være en state. */
    <>
      {/*    {typeData &&
        typeData.types.map((type) => (
          <button
            onClick={() => {
              setType(type.name);
            }}
            key={type.name}
          >
            {type.name}
          </button>
        ))} */}

      <Header />
      <StyledColumn>
        <AnimalCard />
      </StyledColumn>
      <Footer />
    </>
  );
};

export default ListView;
