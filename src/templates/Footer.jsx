import styled from "styled-components";
import ButtonIcon from "../components/ButtonIcon";
import { FaHouseUser, FaComment, FaHeart } from "react-icons/fa";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 105px;
  padding-top: 16px;
  background-color: #F5F5FA;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <ButtonIcon icon={<FaHouseUser />} />
      <ButtonIcon icon={<FaComment />} />
      <ButtonIcon icon={<FaHeart />} />
      <ButtonIcon icon={< FaHeart/>} />
    </StyledFooter>
  );
};

export default Footer;
