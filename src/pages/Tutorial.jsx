import styled from "styled-components";
import coverimage from "../assets/Animal.png"

const StyledImg = styled.img`
height: 400px;
width: 400px;
`

const TutorialApp = () => {
  return (
    <>
      <figure>
        <StyledImg src={coverimage} alt="Cat drawing"/>
      </figure>
    </>
  );
};

export default TutorialApp;
