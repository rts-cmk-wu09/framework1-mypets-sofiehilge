import styled from "styled-components";

const StyledIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = (props) => {
  return <StyledIcon>{props.icon}</StyledIcon>;
};

export default Icon;
