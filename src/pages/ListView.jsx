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
  /* display: grid;
  position: fixed;
  width: calc(100vw - 4rem);
  padding: 0 2rem;
  background-color: #fff;
  height: 60px;
  grid-template-columns: 1fr 1fr 1fr; */
`;

const ListView = (props) => {
  const [data, error, loading] = useAxios("animals");

  return (
    <>
      {error && <p>Der opstod en fejl...</p>}

      {loading && <p>loading...</p>}
      {/* Hvis denne her er true så skriv loading... */}
      {data /* Hvis data er hentet så sæt nedenstående ind.  */ && (
        /* Logical and && hvis værdien på højre side er true, så udføres der på højre side!! */
        <>
          {data.animals.map((animal) => (
            <div key={animal.id}>
              <Header />
              <StyledDiv>
                <AnimalCategories />
                <AnimalCategories />
                <AnimalCategories />
                <AnimalCategories />
              </StyledDiv>
              <StyledColumn>
                <Link to={`/detailview/${animal.id}`}>
                  <AnimalCard />
                </Link>
              </StyledColumn>
              <Footer />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ListView;
