import styled from "styled-components";

const StyledButton = styled.button`
  width: 327px;
  height: 44px;
  background-color: #57419d;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 40px;
`;
const Button = (props) => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
