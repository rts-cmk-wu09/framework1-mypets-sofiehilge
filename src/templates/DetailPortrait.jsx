import styled from "styled-components";
import dogImg from "../assets/Animal.png";
import { useParams } from "react-router-dom";
import useAxios from "../useAxios";

const StyledImg = styled.img`
  /*   width: 243px;
  height: 243px; */
  object-fit: cover;
  width: 100%;
  height: 100%;

`;

const StyledBackground = styled.figure`
  height: 350px;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const DetailPortrait = ({}) => {
  let { id } = useParams();
  const [data, error, loading] = useAxios(id);

  return (
    <StyledBackground key="id">
      <StyledImg
        width="124"
        height="124"
        src={
          data && data.animal.photos.length > 0
            ? data.animal.photos[0].full
            : dogImg
        }
      />
    </StyledBackground>
  );
};

export default DetailPortrait;
