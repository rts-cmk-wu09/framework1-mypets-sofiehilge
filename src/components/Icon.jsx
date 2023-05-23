import styled from "styled-components";

const StyledIcon = styled.i`
padding: 2rem;
`
const Icon = (props) => {
    return ( <StyledIcon>{props.icon}</StyledIcon> );
}
 
export default Icon;