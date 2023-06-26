import styled from "styled-components";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const StyledHeart = styled(AiFillHeart)`
  color: red;
`;

const StyledOutlineHeart = styled(AiOutlineHeart)`
  color: #bdbdbd;
`;

const StyledButton = styled.button`
  border: none;
  text-decoration: none;
  background: white;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    5px 5px 10px rgba(170, 170, 204, 0.25),
    10px 10px 20px rgba(170, 170, 204, 0.5), -10px -10px 20px #ffffff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
 /*  grid-column-start: 2; */
  margin-top: 10px;
  margin-right: 5px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  cursor: pointer;
`;

const FavButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setLiked(!liked)}>
        <div className="Flex Center">
          {liked ? <StyledHeart /> : <StyledOutlineHeart />}
        </div>
      </StyledButton>
    </>
  );
};

export default FavButton;
