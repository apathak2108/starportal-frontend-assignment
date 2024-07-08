import React from "react";
import { StyledHamburgerDiv, StyledHamburgerSpans } from "./hamburger.styled";

const Hamburger = () => {
  return (
    <StyledHamburgerDiv>
      <StyledHamburgerSpans />
      <StyledHamburgerSpans />
      <StyledHamburgerSpans />
    </StyledHamburgerDiv>
  );
};

export default Hamburger;
