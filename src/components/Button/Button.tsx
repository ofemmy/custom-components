import React from "react";
import styled, { css } from "styled-components";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: string;
  onHoverColor?: string;
  typeVariant?: "solid" | "outline" | "link";
  onClick: (e?: React.MouseEvent) => void;
  size?: "default" | "large" | "small";
  block?: boolean;
  rounded?: boolean;
}
interface StyledButtonProps extends ButtonProps {}
const StyledButton = styled.button<StyledButtonProps>`
  border-radius: ${(props) => (props.rounded ? "24px" : "3px")};
  text-align: center;
  transition: all 0.2s;
  white-space: no-wrap;
  display: inline-block;
  line-height: 1.5715;
  position: relative;
  cursor: pointer;
  color: #ffff;
  margin-right: 8px;
  margin-bottom: 12px;
  font-size: 1.5rem;
  border: 1px solid;
  &:hover {
    filter: brightness(1.3);
  }
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          padding: 0 0.7rem;
        `;
      case "large":
        return css`
          padding: 1rem 2rem;
        `;
      default:
        return css`
          padding: 0.5rem 1.5rem;
        `;
    }
  }}
  ${({ typeVariant, theme, color }) => {
    switch (typeVariant) {
      case "link":
        return css`
          border: none;
          color: ${color || theme.primary};
          &:hover {
            filter: brightness(2);
          }
        `;
      case "outline":
        return css`
          background: transparent;
          color: ${color || theme.primary};
          border-color: ${color || theme.primary};
          &:hover {
            filter: brightness(2);
          }
        `;
      default:
        return css`
          border-color: ${color || theme.primary};
          background: ${color || theme.primary};
        `;
    }
  }}
`;

const Button = ({ children, ...otherProps }: ButtonProps) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
