import styled from "styled-components";
import Heading from "../components/Heading";
import Paragraf from "../components/Paragraf";

const StyledArticle = styled.article`
  width: 100%;
`;

const StyledHr = styled.hr`
border-top: 1px dotted blue;
width: 20px;
`
const TutorialText = () => {
  return (
    <StyledArticle>
      <Heading title="My Pets" size="20" as="h1" />
      <Paragraf
        size="16"
        color="828282"
        text="Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue."
        center={true}
      />
      <StyledHr/>
    </StyledArticle>
  );
};

export default TutorialText;
