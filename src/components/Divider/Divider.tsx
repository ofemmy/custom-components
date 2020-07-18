import React from "react";
import styled, { css } from "styled-components";

interface DividerProps {
  children?: React.ReactNode;
  position?: "left" | "center" | "right";
  color?: string;
  orientation?: "horizontal" | "vertical";
}
interface StyledDividerProps extends DividerProps {}

const StyledDivider = styled.div<StyledDividerProps>`
  ${({children,theme,color}) => {
    if (!children) {
      return css`
        border-top: 1px solid;
        border-top-color: ${color || theme.dividerColor};
      `;
    }
    else {
        return css`
          &::before,
          &::after {
            content: "";
            position: relative;
            transform: translateY(50%);
            border-top: 1px solid;
            border-top-color: ${color || theme.dividerColor};
            top: 50%;
            width: 50%;
          }
        `
    }
  }};

  ${({ orientation, color, theme }) => {
    switch (orientation) {
      case "horizontal":
        return css`
          display: flex;
          width: 100%;
          margin: 16px 0;
          min-width: 100%;
          align-items: center;
          position: relative;
        `;
      case "vertical":
        return css`
          position: relative;
          top: -0.06em;
          display: inline-block;
          height: 0.9em;
          margin: 0 8px;
          vertical-align: middle;
          border-top: 0;
          border-left: 1px solid;
          border-left-color: ${color || theme.dividerColor};
        `;
    }
  }};

  ${({ position }) => {
    switch (position) {
      case "left":
        return css`
          &::before {
            width: 10%;
          }
          &::after {
            width: 90%;
          }
        `;
      case "right":
        return css`
          &::before {
            width: 90%;
          }
          &::after {
            width: 10%;
          }
        `;
    }
  }}
`;
const StyledSpan = styled.span`
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0 5px;
`;

const Divider = ({
  children,
  position,
  orientation,
  ...rest
}: DividerProps) => {
  return (
    <StyledDivider
      position={position || "center"}
      orientation={orientation || "horizontal"}
      {...rest}
    >
      {children ? <StyledSpan>{children}</StyledSpan> : null}
    </StyledDivider>
  );
};

export default Divider;
