import styled from "styled-components";

const StyledIcon = styled((props) => props.as)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #${(props) => props.color};
  width: 20px;
  height: 20px;
`;
const Icon = (props) => {
  return <StyledIcon {...props}>{props.icon}</StyledIcon>;
};

export default Icon;
