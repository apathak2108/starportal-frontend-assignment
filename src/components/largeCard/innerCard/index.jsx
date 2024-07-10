import React from "react";
import {
  StyledDivTwoBottom,
  StyledDivTwoBottomOne,
  StyledDivTwoBottomTwo,
  StyledDivTwoUpper,
  StyledImage,
  StyledInnerCardContainer,
  StyledInnerDivOne,
  StyledInnerDivTwo,
  StyledTickDiv,
} from "./innerCard.styled";
import { TiTick } from "react-icons/ti";

const InnerCard = ({ image, tasks, heading }) => {
  return (
    <StyledInnerCardContainer>
      <StyledInnerDivOne>
        <StyledImage src={image} />
      </StyledInnerDivOne>
      <StyledInnerDivTwo>
        <StyledDivTwoUpper>{heading}</StyledDivTwoUpper>
        <StyledDivTwoBottom>
          <StyledDivTwoBottomOne>{tasks} Tasks</StyledDivTwoBottomOne>
          <StyledDivTwoBottomTwo />
        </StyledDivTwoBottom>
      </StyledInnerDivTwo>
      <StyledTickDiv>
        <TiTick />
      </StyledTickDiv>
    </StyledInnerCardContainer>
  );
};

export default InnerCard;
