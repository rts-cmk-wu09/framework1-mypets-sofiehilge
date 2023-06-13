import styled from "styled-components";
import useAxios from "../useAxios";
import dogImg from "../assets/Animal.png";

import { useParams } from "react-router-dom";

const StyledSection = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

`;

const StyledImg = styled.img`
  border: none;
  text-decoration: none;
  background: #f5f5f9;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 50%;
  height: 64px;
  width: 64px;
  object-fit: cover;
  border-radius: 50%;
  margin: 2rem;
`;

const ButtonImage = () => {
  let { id } = useParams();
  const [data, error, loading] = useAxios(id);
  return (
    <StyledSection key="id">
      <StyledImg
        width="64"
        height="64"
        border="50"
        src={
          data && data.animal.photos.length > 0
            ? data.animal.photos[0].full
            : dogImg
        }
        alt="portrait"
      />
    </StyledSection>
  );
};

export default ButtonImage;
