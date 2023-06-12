import DetailCard from "../templates/DetailCard";
import DetailPortrait from "../templates/DetailPortrait";
import { useParams } from "react-router-dom";

const DetailView = () => {
  let { id } = useParams();

  /* //api.petfinder.com/v2/animals/{id} */
  return (
    <>
    <p>dette er id'et fra urlen: {id}</p>
      <DetailPortrait />
      <DetailCard />
    </>
  );
};

export default DetailView;
