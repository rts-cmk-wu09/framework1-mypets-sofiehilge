import styled from "styled-components";
import animalportrait from "../assets/animalportrait.png"

const StyledImg = styled.img`
   width: 243px;
  height: 243px;
  object-fit: cover;
  padding-bottom: 2rem;
`;

const StyledBackground = styled.figure`
 background-color: #57419D;
 height: 350px;
 display: flex;
 justify-content: end;
 align-items: end;
`;

const DetailPortrait = () => {
  return (
    <StyledBackground>
      <StyledImg src={animalportrait} alt="animalportrait" />
    </StyledBackground>
  );
};

export default DetailPortrait;
