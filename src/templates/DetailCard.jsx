import { FaMapPin, FaPaw, FaVenusMars } from "react-icons/fa";
import styled from "styled-components";
import Paragraf from "../components/Paragraf";
import ButtonIcon from "../components/ButtonIcon";
import Heading from "../components/Heading";
import Icon from "../components/icon";
import ButtonImage from "../components/ButtonImages";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const StyledDetailCard = styled.main`
  background-color: white;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  margin-top: -2rem;
  padding: 2rem;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 7px;
  align-items: center;
  gap: 10px;
`;

const DetailCard = () => {
  return (
    <StyledDetailCard>
      <Heading
        title="Greyhound"
        size="20"
        center={false}
        fam="'Lato', sans-serif"
        as="h1"
      />
      <StyledRow>
        <Icon icon={<FaMapPin color="57419d" />} />
        <Paragraf
          size="14"
          color="828282"
          text="New York City"
          center={false}
          lineheight="18"
          fam="'Montserrat', sans-serif;"
        />
      </StyledRow>
      <StyledRow>
        <ButtonIcon icon={<FaPaw color="F4B207" />} />
        <Paragraf
          size="14"
          color="4F4F4F"
          text="Greyhound"
          center={false}
          lineheight="24"
          weight="600"
          fam="'Montserrat', sans-serif;"
        />
        <ButtonIcon icon={<FaVenusMars color="FF8893" />} />
        <Paragraf
          size="14"
          color="4F4F4F"
          text="Male"
          center={false}
          lineheight="24"
          weight="600"
          fam="'Montserrat', sans-serif;"
        />
      </StyledRow>
      <StyledRow>
        <Paragraf
          size="16"
          color="9E9E9E"
          text="The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf) is a domesticated carnivore of the fam..."
          center={false}
          lineheight="24"
        />
        <Paragraf
          size="16"
          color="57419D"
          text="More"
          center={false}
          lineheight="24"
        />
      </StyledRow>
      <ButtonImage />
      <ButtonImage />
      <ButtonImage />
      <Link to="/listview">
        <Button text="Back" />
      </Link>
    </StyledDetailCard>
  );
};

export default DetailCard;
