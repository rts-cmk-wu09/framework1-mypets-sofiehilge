import { FaMapPin, FaPaw, FaVenusMars } from "react-icons/fa";
import styled from "styled-components";
import Paragraf from "../components/Paragraf";
import ButtonIcon from "../components/ButtonIcon";
import Heading from "../components/Heading";
import Icon from "../components/icon";
import ButtonImage from "../components/ButtonImages";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";

import { useParams } from "react-router-dom";

const StyledDetailCard = styled.main`
  background-color: white;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  margin-top: -2rem;
  padding: 2rem;
  position: absolute;
  width: 100%;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 7px;
  align-items: center;
  gap: 10px;
`;

const DetailCard = ({}) => {
  let { id } = useParams();
  const [data, error, loading] = useAxios(id);
  /* console.log(data && data.animal) *//* vigtigt data && fordi det er en asynkron funktion, så data skal først hentes, så vises console.log */
  return (
    <StyledDetailCard key="id">
      <Heading
        title={data && data.animal.name}
        size="20"
        center={false}
        fam="'Lato', sans-serif"
        as="h1"
      />
      <StyledRow>
        <Icon icon={<FaMapPin color="57419d" as="i"/>} />
        <Paragraf
          size="14"
          color="828282"
          text={data && data.animal.contact.address.city}
          center={false}
          lineheight="18"
          fam="'Montserrat', sans-serif;"
          as="p"
        />
      </StyledRow>
      <StyledRow>
        <ButtonIcon icon={<FaPaw color="F4B207" as="i"/>} />
        <Paragraf
          size="14"
          color="4F4F4F"
          text={data && data.animal.type}
          center={false}
          lineheight="24"
          weight="600"
          fam="'Montserrat', sans-serif;"
          as="p"
        />
        <ButtonIcon icon={<FaVenusMars color="FF8893" as="i"/>} />
        <Paragraf
          size="14"
          color="4F4F4F"
          text={data && data.animal.gender}
          center={false}
          lineheight="24"
          weight="600"
          fam="'Montserrat', sans-serif;"
          as="p"
        />
      </StyledRow>
      <StyledRow>
        <Paragraf
          size="16"
          color="9E9E9E"
          text={data && data.animal.description}
          center={false}
          lineheight="24"
          as="p"
        />
      {/*   <Paragraf
          size="16"
          color="57419D"
          text="More"
          center={false}
          lineheight="24"
          as="p"
        /> */}
      </StyledRow>
      <ButtonImage />
      <Link to="/listview">
        <Button text="Back" />
      </Link>
    </StyledDetailCard>
  );
};

export default DetailCard;
