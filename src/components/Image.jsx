import styled from "styled-components";

const StyledImg = styled.img`
    object-fit: cover;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: ${(props) => props.border}%;
`

const Image = (props) => {
    return ( <StyledImg {...props}/> );
}
 
export default Image;