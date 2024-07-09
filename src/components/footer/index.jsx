import React from "react";
import {
  ContentOneDivOne,
  ContentOneDivTwo,
  DivTwoSpanFour,
  DivTwoSpanOne,
  DivTwoSpanThree,
  DivTwoSpanTwo,
  StyledFooterContainer,
  StyledFooterContentOne,
  StyledFooterContentThree,
  StyledFooterContentTwo,
  StyledFooterInnerContainer,
} from "./footer.styled";
import Logo from "../../assets/header/logo.svg";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterInnerContainer>
        <StyledFooterContentOne>
          <ContentOneDivOne></ContentOneDivOne>
          <ContentOneDivTwo>
            <DivTwoSpanOne>
              <div>
                <img src={Logo} alt="logo" />
              </div>
              <div>
                We are your personal guide for exploring web3 projects & earning
                100x rewards
              </div>
            </DivTwoSpanOne>
            <DivTwoSpanTwo></DivTwoSpanTwo>
            <DivTwoSpanThree></DivTwoSpanThree>
            <DivTwoSpanFour></DivTwoSpanFour>
          </ContentOneDivTwo>
        </StyledFooterContentOne>
        <StyledFooterContentTwo></StyledFooterContentTwo>
        <StyledFooterContentThree></StyledFooterContentThree>
      </StyledFooterInnerContainer>
    </StyledFooterContainer>
  );
};

export default Footer;
