import Header from "../templates/Header";
import AnimalCategories from "../components/Categories";
import styled from "styled-components";
import AnimalCard from "../templates/card";
import Footer from "../templates/Footer";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";

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

const ListView = (props) => {
  const [data, error, loading] = useAxios();
  return (
    <>
      <Header />
      <StyledDiv>
        <AnimalCategories />
        <AnimalCategories />
        <AnimalCategories />
        <AnimalCategories />
      </StyledDiv>
      {error && <p>Der opstod en fejl...</p>}
      {loading && <p>loading...</p>}
      {data && (
        <ul style={{ listStyleType: "none" }}>
          {data.animals.map((animal) => (
            <li key={animal.id}>{animal.name}</li>
          ))}
        </ul>
      )}
      <StyledColumn>
        <Link to="/detailview">
          <AnimalCard />
        </Link>

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
