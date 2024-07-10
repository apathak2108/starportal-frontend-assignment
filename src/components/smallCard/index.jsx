import React from "react";
import {
    StyledDivFive,
  StyledDivFour,
  StyledDivOne,
  StyledDivThree,
  StyledDivTwo,
  StyledImage,
  StyledSmallMainDiv,
  StyledTickDiv,
} from "./smallCard.styled";
import { IoMdCheckmark } from "react-icons/io";

const SmallCard = ({image, heading, text}) => {
  return (
    <StyledSmallMainDiv>
      <StyledDivOne>
        <StyledTickDiv>
          <IoMdCheckmark />
        </StyledTickDiv>
      </StyledDivOne>
      <StyledDivTwo>
        <StyledImage src={image} />
      </StyledDivTwo>
      <StyledDivThree>{heading}</StyledDivThree>
      <StyledDivFour>{text}</StyledDivFour>
      <StyledDivFive>Claim</StyledDivFive>
    </StyledSmallMainDiv>
  );
};

export default SmallCard;
