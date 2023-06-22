import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import ButtonIcon from "../components/ButtonIcon";
import Icon from "../components/icon";
import portriat from "../assets/Rectangle.png";
import AnimalCategories from "../components/Categories";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const StyledImage = styled.figure`
  display: flex;
  align-items: center;
  object-fit: cover;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: solid 2px white;
  background-image: url(${portriat});
  border: 2px solid white;
  -moz-border-radius: 2px;
  margin-right: 2rem;
`;

const StyledFlex = styled.div`
  display: flex;
  align-self: center;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledSelect = styled.select`
  border: none;
  background-color: inherit;
  color: #57419d;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const StyledCat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  /* scroll-behavior: smooth; */
`;

const StyledMapPin = styled(FaMapMarkerAlt)`
  color: #57419d;
`;

const Header = () => {
  /*  setContext[(context, setContext)] = useOutletContext(); */

  /* console.log(`fetch("https://api... bla bla ${location}")) */
  return (
    <>
      <StyledHeader>
        <StyledFlex>
          <StyledImage />
          <StyledDiv>
            <StyledMapPin />
            <StyledSelect>
              <option value="132u29852">New York</option>
              <option value="1348u23oi5u2">Copenhagen</option>
              <option value="134134i431">Buenos Aires</option>
            </StyledSelect>
          </StyledDiv>
        </StyledFlex>
        <ButtonIcon
          icon={<BiBell width="20" height="20" color="5533EA" as="i" />}
        />
      </StyledHeader>
      <StyledCat className="movieCardContainer">
        <AnimalCategories text="All" />
        <AnimalCategories text="Dog" />
        <AnimalCategories text="Cats" />
        <AnimalCategories text="Birds" />
      </StyledCat>
    </>
  );
};

export default Header;
