import React, { useRef } from "react";
import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledSelect = styled.select`
  background: transparent;
  appearance: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  padding: 1rem 2rem 1rem 2rem;
  color: inherit;
  border-radius: 0.25rem;
  border: 1px solid red;
  line-height: normal;
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
const Select = () => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const clickHandler = () => {
    console.log(selectRef);
    if (selectRef.current) selectRef.current.selectedIndex = 1;
  };
  return (
    <StyledContainer>
      <StyledSelect ref={selectRef}>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
      </StyledSelect>
      <StyledIconDiv>
        <MdArrowDropDown />
      </StyledIconDiv>
    </StyledContainer>
  );
};

export default Select;
