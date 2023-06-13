import styled from "styled-components";
import Paragraf from "./Paragraf";

const StyledCategories = styled.button`
  background: #f5f5fa;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 16px;
  border: none;
  text-decoration: none;
  width: fit-content;
  height: 32px;
  padding: 0 2rem;
  margin: 5px;
  gap: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  font-family: ${(props) => props.fam};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  color: #${(props) => props.color};
  line-height: ${(props) => props.lineheight}px;
  ${(props) => props.center && "text-align:center"}
  word-wrap: break-word;
`;

const AnimalCategories = (props) => {
  return <StyledCategories {...props}>{props.text}</StyledCategories>;
};

export default AnimalCategories;
