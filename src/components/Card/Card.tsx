import React from "react";
import styled, { css, Keyframes } from "styled-components";

const StyledCard = styled.div<CardProp>`
  max-width: ${({ width }) => (width ? width : "40rem")};
  min-height: ${({ height }) => (height ? height : "10rem")};
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  border-radius: 3px;
  background: ${({ color }) => (color ? color : "#fff")};
  padding: 1.6rem;
  animation: ${({ animation }) =>{
    if(animation){
      return css`0.35s ${animation?.type} ease-in-out forwards`;
    }
    return null;
  }}
`;
interface CardProp extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  color?: string;
  animation?: { type: Keyframes };
}
const Card = (props: CardProp) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
