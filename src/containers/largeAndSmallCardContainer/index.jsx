import React from "react";
import {
  StyledLargeAndSmallCardsContainerMainDiv,
  StyledLowerDiv,
  StyledUpperDiv,
} from "./largeAndSmallCardContainer.styled";
import LargeCard from "../../components/largeCard";
import SmallCard from "../../components/smallCard";
import LargeCardImageOne from "../../assets/body/largeCard1.png";
import LargeCardImageTwo from "../../assets/body/largeCard2.png";
import SmallCardImageOne from "../../assets/body/outerSmallCard1.png";
import SmallCardImageTwo from "../../assets/body/outerSmallCard2.png";

const LargeAndSmallCardsContainer = () => {
  return (
    <StyledLargeAndSmallCardsContainerMainDiv>
      <StyledUpperDiv>
        <LargeCard
          image={LargeCardImageOne}
          heading="Basics of Crypto"
          quests="6"
          text="The safest and easiest place to start your crypto journey!"
          xp="1490"
        />
        <SmallCard
          image={SmallCardImageOne}
          heading="Intract Certified: Learner NFT"
          text="Your crypto black-belt
certificate"
        />
      </StyledUpperDiv>
      <StyledLowerDiv>
        <SmallCard
          image={SmallCardImageTwo}
          heading="Intract Certified: Earner NFT"
          text="Your proof of
airdrop expertise"
        />
        <LargeCard
          image={LargeCardImageTwo}
          heading="Introduction to Airdrops"
          quests="4"
          text="Your best bet to make it big in crypto!"
          xp="1040"
        />
      </StyledLowerDiv>
    </StyledLargeAndSmallCardsContainerMainDiv>
  );
};

export default LargeAndSmallCardsContainer;
