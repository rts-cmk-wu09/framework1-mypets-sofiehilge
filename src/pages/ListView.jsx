import Header from "../templates/Header";
import AnimalCategories from "../components/Categories";
import styled from "styled-components";
import AnimalCard from "../templates/card";
import Footer from "../templates/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 24px;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      <StyledColumn>
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </StyledColumn>
      <Footer />
    </>
  );
};

export default ListView;
