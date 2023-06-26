import styled from "styled-components";

const StyledHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  font-family: ${(props) => props.fam};
  ${(props) => props.center && 'text-align:center'}
  
  margin: 0;

`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;
