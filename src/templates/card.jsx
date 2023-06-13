import styled from "styled-components";
import Heading from "../components/Heading";
import ButtonIcon from "../components/ButtonIcon";
import Icon from "../components/icon";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import Paragraf from "../components/Paragraf";
import useAxios from "../useAxios";
import { Link } from "react-router-dom";
import LoadingView from "../pages/LoadingView";
import ErrorView from "../pages/ErrorView";
import dogImg from "../assets/Animal.png";


const StyledImg = styled.img`
  object-fit: cover;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 32px;
`
const StyledFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledCardContainer = styled.article`
  display: flex;
  justify-content: space-evenly;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 32px;
  margin: 26px;
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
  const [data, error, loading] = useAxios();
  return (
    <>
      {error && <ErrorView />}
      {loading && <LoadingView />}
      {/* Hvis denne her er true så skriv loading... */}
      {data /* Hvis data er hentet så sæt nedenstående ind.  */ && (
        /* Logical and && hvis værdien på højre side er true, så udføres der på højre side!! */
        <>
          {data.animals.map((animal) => (
            <Link to={`/detailview/${animal.id}`} key={animal.id}>
              <StyledCardContainer>
             <StyledFigure>
              <StyledImg width="124" height="124" src={
                      animal.photos.length > 0 ? animal.photos[0].full : dogImg
                    }/>
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
                    <ButtonIcon icon={<FaHeart color="FF4B33" />} />
                  </StyledRowSpace>
                  <StyledRow>
                    <Icon icon={<FaMapMarkerAlt color="57419d" />} />
                    <Paragraf
                      size="12"
                      color="828282"
                      text={animal.contact.address.city}
                      center={false}
                      lineheight="18"
                      fam="'Montserrat', sans-serif;"
                    />
                  </StyledRow>
                  <StyledSpan>
                    <StyledP>
                      {animal.description != null &&
                      animal.description.length > 100
                        ? animal.description.split(" ").slice(0, 3).join(" ") +
                          "..."
                        : "Click for more details..."}
                    </StyledP>
                  </StyledSpan>
                </StyledColumn>
              </StyledCardContainer>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default AnimalCard;
