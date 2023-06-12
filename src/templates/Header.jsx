import styled from "styled-components";
import { FaBell, FaMapMarkerAlt} from "react-icons/fa";
import { BiBell } from "react-icons/bi"
import ButtonIcon from "../components/ButtonIcon";
import Icon from "../components/icon";
import portriat from "../assets/Rectangle.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
`;

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const StyledFlex = styled.div`
  display: flex;
  align-self: center;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledSelect = styled.select`
  border: none;
  background-color: inherit;
  color: #57419d;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

`;

const Header = () => {
  /*  setContext [context, setContext] = useOutletContext(); bruges fordi det ligger på dybere niveauer.
  
  console.log(`fetch("https://api... bla bla ${location}"))*/
  return (
    <StyledHeader>
      <StyledFlex>
        <StyledImage src={portriat} alt="portrait" />
        <StyledDiv>
          <Icon icon={<FaMapMarkerAlt color="57419d" />} />
          <StyledSelect>
            <option value="indsæt zip-code">New York</option>
            <option value="Copenhagen">Copenhagen</option>
            <option value="Buenos Aires">Buenos Aires</option>
          </StyledSelect>
        </StyledDiv>
      </StyledFlex>

      <ButtonIcon icon={<BiBell color="5533EA" />} />
    </StyledHeader>
  );
};

export default Header;
