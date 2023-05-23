import styled from "styled-components";

const StyledParagraf = styled.p`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: #${(props) => props.color};
  line-height: ${(props) => props.lineheight}px;
  ${(props) => props.center && "text-align:center"}
  
`;

const Paragraf = (props) => {
  return <StyledParagraf {...props}>{props.text}</StyledParagraf>;
};

export default Paragraf;
