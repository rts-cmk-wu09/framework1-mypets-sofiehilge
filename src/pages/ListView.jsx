import Header from "../templates/Header";
import AnimalCategories from "../components/Categories";
import styled from "styled-components";
import AnimalCard from "../templates/Card";
import Footer from "../templates/Footer";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";
import Paragraf from "../components/Paragraf";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 24px;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* display: grid;
  position: fixed;
  width: calc(100vw - 4rem);
  padding: 0 2rem;
  background-color: #fff;
  height: 60px;
  grid-template-columns: 1fr 1fr 1fr; */
`;

const ListView = (props) => {
  return (
    <>
      <Header />
      <StyledDiv>
        <AnimalCategories
          text="Birds"
          size="14"
          color="7878AB"
          center={false}
          lineheight="20"
          fam="'Lato', sans-serif;"
          weight="700"
          as="p"
        />
        <AnimalCategories
          text="Dog"
          size="14"
          color="7878AB
          "
          center={false}
          lineheight="20"
          fam="'Lato', sans-serif;"
          weight="700"
          p="as"
        />
        <AnimalCategories
          text="Cats"
          size="14"
          color="7878AB
          "
          center={false}
          lineheight="20"
          fam="'Lato', sans-serif;"
          weight="700"
          as="p"
        />
      </StyledDiv>
      <StyledColumn>
        <AnimalCard />
      </StyledColumn>
      <Footer />
    </>
  );
};

export default ListView;
