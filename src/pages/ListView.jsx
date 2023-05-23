import Header from "../templates/Header";
import AnimalCategories from "../components/Categories";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem;
  

`;

const ListView = () => {
  return (
    <>
      <Header />
      <StyledDiv>
        <AnimalCategories />
        <AnimalCategories />
        <AnimalCategories />
        <AnimalCategories />
      </StyledDiv>
    </>
  );
};

export default ListView;
