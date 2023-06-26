import styled from "styled-components";

const StyledIcon = styled((props) => props.as)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #${(props) => props.color};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
const Icon = (props) => {
  return <StyledIcon {...props}>{props.icon}</StyledIcon>;
};

export default Icon;
