import React from "react";
import styled from "styled-components";

const StyledCard = styled.div<CardProp>`
  width: ${({ width }) => (width ? width : "30rem")};
  height: ${({ height }) => (height ? height : "30rem")};
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  border-radius: 5px;
  background: ${({ color }) => (color ? color : "#fff")};
  padding: 2rem;
`;
interface CardProp extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  color?: string;
}
const Card = (props: CardProp) => {
  return <StyledCard {...props}></StyledCard>;
};

export default Card;
