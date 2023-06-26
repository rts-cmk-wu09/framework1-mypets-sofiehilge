import { useState } from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 32px;
  margin: 26px;
  position: relative;
  display: grid;
  grid-template-columns: 320px 1fr;
`;

const StyledCardComponent = ({childrens}) => {
    /* const [bookmarked, setBookmarked] = useState(
        false
        //JSON.parse(localStorage.getItem(id))
      ); */
    return ( <StyledArticle>{childrens}</StyledArticle>);
}
 
export default StyledCardComponent;