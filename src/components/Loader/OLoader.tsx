import React from "react";
import styled, { css, keyframes } from "styled-components";

const bounce = keyframes`
0%,80%,100%{
    transform:scale(0);
}
40%{
    transform:scale(1);
}

`;
const StyledLoader = styled.div<OLoaderProps>`
  & > div {
    background-color: ${({ loaderColor, theme }) =>
      loaderColor ? loaderColor : theme.primary};
    border-radius: 50%;
    display: inline-block;
    animation: 1.5s ${bounce} infinite ease-in-out both;
    ${({ size }) => {
      switch (size) {
        case "sm":
          return css`
            width: 1rem;
            height: 1rem;
          `;
        case "md":
          return css`
            width: 2rem;
            height: 2rem;
          `;
        case "lg":
          return css`
            width: 3rem;
            height: 3rem;
          `;
      }
    }}
  }
  .bounce {
    animation-delay: -0.3s;
  }
  .bounce2 {
    animation-delay: -0.15s;
  }
`;
interface OLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  loaderColor?: string;
  size?: "sm" | "md" | "lg";
}
export const OLoader = ({ size, ...otherProps }: OLoaderProps) => {
  return (
    <StyledLoader size={size ? size : "md"} {...otherProps}>
      <div className="bounce"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </StyledLoader>
  );
};
