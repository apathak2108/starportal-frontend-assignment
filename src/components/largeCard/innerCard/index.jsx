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
} from "./innerCard.styled";

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
    </StyledInnerCardContainer>
  );
};

export default InnerCard;
