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
  justify-content: space-between;
  width: 200px;
`;

const AnimalCard = () => {
  return (
    <StyledCardContainer>
      <StyledImg src={animalportrait} alt="animal portrait" />
      <StyledColumn>
        <StyledRow>
          <Heading title="Greyhound" size="20" center={false} as="h2" />
          <ButtonIcon icon={<FaHeart />} />
        </StyledRow>
        <StyledRow>
        <Icon icon={<FaMapPin />} />
          <Paragraf
            size="18"
            color="828282"
            text="New York City"
            center={false}
            lineheight="18"
          />
        </StyledRow>
        <Paragraf
          size="14"
          color="4f4f4f"
          text="Taking care of a pet is my favorite, it helps me to ..."
          center={false}
          lineheight="20"
        />
      </StyledColumn>
    </StyledCardContainer>
  );
};

export default AnimalCard;
