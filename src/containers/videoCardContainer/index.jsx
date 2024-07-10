import React from "react";
import {
  StyledCardMainDiv,
  StyledCardsContainerDiv,
  StyledCardsTitleDiv,
  StyledHeading,
  StyledText,
} from "./videoCardContainer.styled";
import VideoCard from "../../components/videoCard";
import ImageOne from "../../assets/body/crypto-one.jpeg";
import ImageTwo from "../../assets/body/crypto-two.jpeg";
import ImageThree from "../../assets/body/crypto-three.jpeg";
import ImageFour from "../../assets/body/crypto-four.jpeg";

const VideoCardContainer = () => {
  return (
    <StyledCardMainDiv>
      <StyledCardsTitleDiv>
        <StyledHeading>
          Top Crypto Creators and Projects to Follow
        </StyledHeading>
        <StyledText>
          Answers to your crypto doubts, straight from the experts
        </StyledText>
      </StyledCardsTitleDiv>
      <StyledCardsContainerDiv>
        <VideoCard source={ImageOne} />
        <VideoCard source={ImageTwo} />
        <VideoCard source={ImageThree} />
        <VideoCard source={ImageFour} />
      </StyledCardsContainerDiv>
    </StyledCardMainDiv>
  );
};

export default VideoCardContainer;
