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
  StyledIconDiv,
} from "./largeCard.styled";
import InnerCard from "./innerCard";
import InnerImageOne from "../../assets/body/innerCard1.png";
import { RiBitCoinFill } from "react-icons/ri";
import { PiTriangleDuotone } from "react-icons/pi";
import InnerImageTwo from "../../assets/body/innerCard2.jpg";
import InnerImageThree from "../../assets/body/innerCard3.jpg";
import InnerImageFour from "../../assets/body/innerCard4.jpg";
import InnerImageFive from "../../assets/body/innerCard5.jpg";
import InnerImageSix from "../../assets/body/innerCard6.jpg";
import InnerImageSeven from "../../assets/body/innerCard7.jpg";
import InnerImageEight from "../../assets/body/innerCard8.jpg";
import InnerImageNine from "../../assets/body/innerCard9.png";
import InnerImageTen from "../../assets/body/innerCard10.jpg";

const LargeCard = ({ image, heading, quests, text, xp }) => {
  return (
    <StyledLargeCardContainer>
      <StyledUpperContainer>
        <StyledIconDiv>
          <PiTriangleDuotone />
        </StyledIconDiv>
        <StyledUpperDivOne>
          <StyledUpperDivOneImage src={image} />
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
          image={InnerImageTwo}
          heading="#2: But what is crypto and web3?"
          tasks="9"
        />
        <InnerCard
          image={InnerImageThree}
          heading="#3: But what is crypto and web3?"
          tasks="7"
        />
        <InnerCard
          image={InnerImageFour}
          heading="#4: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageFive}
          heading="#5: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageSix}
          heading="#6: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageSeven}
          heading="#7: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageEight}
          heading="#8: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageNine}
          heading="#9: But what is crypto and web3?"
          tasks="11"
        />
        <InnerCard
          image={InnerImageTen}
          heading="#10: But what is crypto and web3?"
          tasks="11"
        />
      </StyledBottomContainer>
    </StyledLargeCardContainer>
  );
};

export default LargeCard;
