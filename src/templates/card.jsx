import styled from "styled-components";
import animalportrait from "../assets/animalportrait.png";

const StyledCardContainer = styled.article`
  display: flex;
  justify-content: space-evenly;
`;

const StyledImg = styled.img`
  width: 124px;
  height: 124px;
  object-fit: cover;
`;

const StyledColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

const AnimalCard = () => {
  return (
    <StyledCardContainer>
      <StyledImg src={animalportrait} alt="animal portrait"/>

    </StyledCardContainer>
  );
};

export default AnimalCard;
