import styled from "styled-components";
import Heading from "../components/Heading";
import Icon from "../components/icon";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Paragraf from "../components/Paragraf";
import useAxios from "../useAxios";
import { Link } from "react-router-dom";
import LoadingView from "../pages/LoadingView";
import ErrorView from "../pages/ErrorView";
import dogImg from "../assets/Animal.png";
import { useParams } from "react-router-dom";
import { useState } from "react";

const StyledImg = styled.img`
  object-fit: cover;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 32px;
`;
const StyledFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr;
`;
const StyledCardContainer = styled.article`
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 32px;
  margin: 26px;
  position: relative;
  display: grid;
  grid-template-columns: 320px 1fr;
`;

const StyledLinkContainer = styled.span`
  display: flex;
  flex-direction: row;
  display: block;
  grid-column-start: 1;
  grid-column-end: 1;
`;
const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  padding: 5px;
`;

const StyledHeart = styled.span`
  border: none;
  text-decoration: none;
  background: white;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 10px;
  grid-column-start: 2;
  grid-column-end: 2;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;

const StyledRowSpace = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  padding: 5px;
  justify-content: space-between;
`;

const StyledSpan = styled.span`
  padding: 10px;
`;

const StyledP = styled.p`
  size: 14px;
  color: #4f4f4f;
  font-family: "Montserrat", sans-serif;
`;

const AnimalCard = () => {
  const { id } = useParams("id");
  const [data, error, loading] = useAxios();
  const [bookmarked, setBookmarked] = useState(
    JSON.parse(localStorage.getItem(id))
  );
  /*   const handleLike = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].liked = !updatedCards[index].liked;
    setCards(updatedCards);
  }; */

  /* console.log(data.id); */
  return (
    <>
      {error && <ErrorView />}
      {loading && <LoadingView />}
      {/* Hvis denne her er true så skriv loading... */}
      {data /* Hvis data er hentet så sæt nedenstående ind.  */ && (
        /* Logical and && hvis værdien på højre side er true, så udføres der på højre side!! */
        <>
          {data.animals.map((animal) => (
            <StyledCardContainer key={animal.id}>
              <StyledLinkContainer>
                <Link className="flexcontainer" to={`/detailview/${animal.id}`}>
                  <StyledFigure>
                    <StyledImg
                      width="124"
                      height="124"
                      src={
                        animal.photos.length > 0
                          ? animal.photos[0].full
                          : dogImg
                      }
                    />
                  </StyledFigure>
                  <StyledColumn>
                    <StyledRowSpace>
                      <Heading
                        title={animal.name}
                        size="20"
                        center={false}
                        fam="'Lato', sans-serif"
                        as="h2"
                      />
                    </StyledRowSpace>
                    <StyledRow>
                      <Icon icon={<FaMapMarkerAlt color="57419d" as="i" />} />
                      <Paragraf
                        size="12"
                        color="828282"
                        text={animal.contact.address.city}
                        center={false}
                        lineheight="18"
                        fam="'Montserrat', sans-serif;"
                        as="p"
                      />
                    </StyledRow>
                    <StyledSpan>
                      <StyledP
                        as="p"
                        size="14"
                        color="4f4f4f"
                        fam="'Montserrat', sans-serif;"
                        center={false}
                        lineheight="18"
                      >
                        {animal.description != null &&
                        animal.description.length > 100
                          ? animal.description
                              .split(" ")
                              .slice(0, 3)
                              .join(" ") + "..."
                          : "Click for more details..."}
                      </StyledP>
                    </StyledSpan>
                  </StyledColumn>
                </Link>
              </StyledLinkContainer>
              <StyledHeart
                onClick={() => {
                  /* handleLike(index); */
                  setBookmarked(!bookmarked);
                  bookmarked
                    ? localStorage.removeItem(id)
                    : localStorage.setItem(id, JSON.stringify(animal.name));
                }}
              >
                {!bookmarked ? (
                  <AiOutlineHeart style={{ color: "#BDBDBD" }} />
                ) : (
                  <AiFillHeart />
                )}
              </StyledHeart>
            </StyledCardContainer>
          ))}
        </>
      )}
    </>
  );
};

export default AnimalCard;
