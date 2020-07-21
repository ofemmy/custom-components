import React from "react";
import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
to {
transform:rotate(360deg)
}

`;
const StyledSpinner = styled.div<SpinnerProps>`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: inline-block;
  border: 4px solid #f1f1f1;
  border-top-color: ${(props) => props.theme.primary};
  animation: 0.8s ${spin} infinite ease-in-out;
  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          width: 2rem;
          height: 2rem;
          border-width: 1.5px;
        `;
      case "md":
        return css`
          width: 5rem;
          height: 5rem;
          border-width: 1.9px;
        `;
      case "lg":
        return css`
          width: 10rem;
          height: 10rem;
        `;
    }
  }}
`;
interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}
const Spinner = ({ size, ...otherProps }: SpinnerProps) => {
  return (
    <StyledSpinner size={size ? size : "lg"} {...otherProps}></StyledSpinner>
  );
};

export default Spinner;
