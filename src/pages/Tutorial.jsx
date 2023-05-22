import styled from "styled-components";

const StyledImg = styled.img`
height: 400px;
width: 400px;
`

const TutorialApp = () => {
  return (
    <>
      <figure>
        <StyledImg src="./assets/Animal.png" alt="Cat drawing"/>
      </figure>
    </>
  );
};

export default TutorialApp;
