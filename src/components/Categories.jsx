import styled from "styled-components";
import Paragraf from "./Paragraf";

const StyledCategories = styled.button`
  background: #f5f5fa;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 16px;
  border: none;
  text-decoration: none;
  width: fit-content;
  padding: 0 2rem;
  margin: 5px;
  gap: 5px;
  text-align: center;
  height: 20px;
  display: flex;
  align-items: center;
`;

const AnimalCategories = () => {
  return (
    <StyledCategories>
      <Paragraf
        text="cats"
        size="16"
        center={true}
        color="7878AB"
        lineheight="20"
        weight="700"
      />
    </StyledCategories>
  );
};

export default AnimalCategories;
