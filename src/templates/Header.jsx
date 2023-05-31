import styled from "styled-components";
import { FaBell, FaMapPin } from "react-icons/fa";
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
  align-items: flex-start;
  align-self: center;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledSelect = styled.select`
  border: none;
  background-color: inherit;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledFlex>
        <StyledImage src={portriat} alt="portrait" />
        <StyledDiv>
          <Icon icon={<FaMapPin />} />
          <StyledSelect>
            <option value="New York">New York</option>
            <option value="Copenhagen">Copenhagen</option>
            <option value="Buenos Aires">Buenos Aires</option>
          </StyledSelect>
          {/* <Paragraf size="16" color="333333" text="New York City" />
        <Icon icon={<FaCaretDown />} /> */}
        </StyledDiv>
      </StyledFlex>

      <ButtonIcon icon={<FaBell />} />
    </StyledHeader>
  );
};

export default Header;
