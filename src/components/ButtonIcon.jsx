import styled from "styled-components";

const StyledIcon = styled.button`
  border: none;
  text-decoration: none;
  background: #f5f5f9;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

const ButtonIcon = (props) => {
  return <StyledIcon>{props.icon}</StyledIcon>;
};

export default ButtonIcon;

/* Props.children - kan rendere et komponent inden i et andet komponent. */
