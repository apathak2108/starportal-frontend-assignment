import React from "react";
import {
  StyledUpperDivTwoPartTwo,
  StyledLargeCardContainer,
  StyledUpperContainer,
  StyledUpperDivTwo,
  StyledUpperDivTwoPartOne,
  StyledUpperDivTwoPartThree,
  StyledRewardCountDiv,
  StyledQuestCountDiv,
  StyledUpperDivOne,
  StyledBottomContainer,
  StyledUpperDivOneImage,
} from "./largeCard.styled";
import LargeCardImageOne from "../../assets/body/largeCard1.png";
import InnerCard from "./innerCard";
import InnerImageOne from "../../assets/body/innerCard1.png";
import { RiBitCoinFill } from "react-icons/ri";

const LargeCard = ({ heading, quests, text, xp }) => {
  return (
    <StyledLargeCardContainer>
      <StyledUpperContainer>
        <StyledUpperDivOne>
          <StyledUpperDivOneImage src={LargeCardImageOne} />
          <StyledQuestCountDiv>{quests} Quests</StyledQuestCountDiv>
        </StyledUpperDivOne>
        <StyledUpperDivTwo>
          <StyledUpperDivTwoPartOne>{heading}</StyledUpperDivTwoPartOne>
          <StyledUpperDivTwoPartTwo>{text}</StyledUpperDivTwoPartTwo>
          <StyledUpperDivTwoPartThree>
            <StyledRewardCountDiv>
              <RiBitCoinFill color="gold" />
              <span>{xp} XPs</span>
            </StyledRewardCountDiv>
          </StyledUpperDivTwoPartThree>
        </StyledUpperDivTwo>
      </StyledUpperContainer>
      <StyledBottomContainer>
        <InnerCard
          image={InnerImageOne}
          heading="#1: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageOne}
          heading="#1: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageOne}
          heading="#1: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageOne}
          heading="#1: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageOne}
          heading="#1: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageOne}
          heading="#1: But what is crypto and web3?"
          tasks="11"
        />
      </StyledBottomContainer>
    </StyledLargeCardContainer>
  );
};

export default LargeCard;
