import styled from "styled-components";
import coverimage from "../assets/Animal.png";
import TutorialText from "../templates/TutorialText";
import Button from "../components/Button";
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TutorialApp = () => {
  return (
    <>
      <figure>
        <StyledImg src={coverimage} alt="Cat drawing" />
      </figure>
      <StyledDiv>
        <TutorialText />
        <Button text="Skip" classname="center" />
      </StyledDiv>
    </>
  );
};

export default TutorialApp;
