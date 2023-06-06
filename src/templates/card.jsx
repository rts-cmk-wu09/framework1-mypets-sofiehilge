import styled from "styled-components";
import animalportrait from "../assets/animalportrait.png";
import Heading from "../components/Heading";
import ButtonIcon from "../components/ButtonIcon";
import Icon from "../components/icon";
import { FaHeart, FaMapPin } from "react-icons/fa";
import Paragraf from "../components/Paragraf";

const StyledCardContainer = styled.article`
  display: flex;
  justify-content: space-evenly;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 32px;
  margin: 26px;
`;

const StyledImg = styled.img`
  width: 124px;
  height: 124px;
  object-fit: cover;
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

const AnimalCard = () => {
  return (
    <StyledCardContainer>
      <StyledImg src={animalportrait} alt="animal portrait" />
      <StyledColumn>
        <StyledRowSpace>
          <Heading
            title="Greyhound"
            size="20"
            center={false}
            fam="'Lato', sans-serif"
            as="h2"
          />
          <ButtonIcon icon={<FaHeart color="FF4B33" />} />
        </StyledRowSpace>
        <StyledRow>
          <Icon icon={<FaMapPin color="57419d" />} />
          <Paragraf
            size="12"
            color="828282"
            text="New York City"
            center={false}
            lineheight="18"
            fam="'Montserrat', sans-serif;"
          />
        </StyledRow>
        <Paragraf
          size="14"
          color="4f4f4f"
          text="Taking care of a pet is my favorite, it helps me to ..."
          center={false}
          lineheight="20"
          fam="'Montserrat', sans-serif;"
        />
      </StyledColumn>
    </StyledCardContainer>
  );
};

export default AnimalCard;
