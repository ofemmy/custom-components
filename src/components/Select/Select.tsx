import React, { HTMLAttributes, ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import { IconType } from "react-icons/lib";
const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledSelect = styled.select<SelectProps>`
  border-color: ${({ theme }) => theme.primary};
  appearance: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  padding: 1rem 2rem 1rem 2rem;
  color: inherit;
  border-radius: 0.25rem;
  border: 1px solid;
  line-height: normal;
  ${({ variant, theme }) => {
    switch (variant) {
      case "fill":
        return css`
          background: ${theme.accent};
          border: none;
        `;
      case "outline":
        return css`
          border-color: ${theme.accent};
        `;
      case "no-border":
        return css`
          border: none;
        `;
      case "underline":
        return css`
          border: none;
          border-bottom: 2px solid ${theme.accent};
        `;
    }
  }}
`;

const StyledIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  font-size: 2rem;
  padding: 0.6rem;
  pointer-events: none;
`;
interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  variant?: "outline" | "fill" | "underline" | "no-border";
  icon?: IconType;
  placeholder?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const Select = ({
  variant,
  placeholder,
  children,
  icon,
  ...otherProps
}: SelectProps) => {
  return (
    <StyledContainer>
      <StyledSelect
        variant={variant ? variant : "outline"}
        {...otherProps}
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled hidden>
          {placeholder}
        </option>
        {children}
      </StyledSelect>
      <StyledIconDiv>{icon ? icon({}) : <MdArrowDropDown />}</StyledIconDiv>
    </StyledContainer>
  );
};

export default Select;
