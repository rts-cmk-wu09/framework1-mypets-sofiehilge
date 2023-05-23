import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: #57419d;
  width: 70%;

  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 32px;
`;
const Button = (props) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
