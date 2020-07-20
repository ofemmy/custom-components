import React from "react";
import styled, { css } from "styled-components";
import { IconType } from "react-icons/lib";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: string;
  onHoverColor?: string;
  typeVariant?: "solid" | "outline" | "link";
  onClick: (e?: React.MouseEvent) => void;
  size?: "default" | "large" | "small";
  block?: boolean;
  rounded?: boolean;
  iconRight?: IconType;
  iconLeft?: IconType;
}
interface StyledButtonProps extends ButtonProps {}
const StyledButton = styled.button<StyledButtonProps>`
svg{ 
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.5rem;
    margin-bottom:0.4rem;
    margin-right: 0.5rem;
    flex-shrink: 0;
    backface-visibility: hidden;
}
  border-radius: ${(props) => (props.rounded ? "24px" : "3px")};
  text-align: center;
  transition: all 0.2s;
  white-space: no-wrap;
  vertical-align:middle;
  display: inline-block;
  line-height: 1.7;
  position: relative;
  cursor: pointer;
  color: #ffff;
  margin-right: 8px;
  margin-bottom: 12px;
  font-size: 1.5rem;
  border: 1px solid;
  outline: 0;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    outline-color: initial;
    outline-style: initial;
    outline-width: 0px;
    filter: brightness(1.9);
  };
  :disabled { opacity: 0.5; cursor: not-allowed;filter: none; }
  ${({ block }) => {
    if (block) {
      return css`
        display: block;
        width: 100%;
      `;
    }
  }}
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

const Button = ({
  iconLeft,
  iconRight,
  children,
  ...otherProps
}: ButtonProps) => {
  console.log(iconLeft);
  return (
    <StyledButton {...otherProps}>
      {iconLeft ? iconLeft({}) : null}
      {children}
      {iconRight ? iconRight({}) : null}
    </StyledButton>
  );
};

export default Button;
