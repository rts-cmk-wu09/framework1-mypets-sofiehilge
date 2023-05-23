import styled from "styled-components";
import coverimage from "../assets/Animal.png";
import TutorialText from "../templates/TutorialText";
import Button from "../components/Button";

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TutorialApp = () => {
  return (
    <StyledDiv>
      <StyledFigure>
        <StyledImg src={coverimage} alt="Cat drawing" />
        <TutorialText />
      </StyledFigure>
      <Button text="Skip" />
    </StyledDiv>
  );
};

export default TutorialApp;
