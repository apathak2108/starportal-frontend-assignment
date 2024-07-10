import React from "react";
import { StyledPlayIcon, StyledVideoCardContainer, StyledVideoImage } from "./videoCard.styled";
import { FaPlayCircle } from "react-icons/fa";

const VideoCard = ({ source }) => {
  return (
    <StyledVideoCardContainer>
      <StyledVideoImage src={source} alt="video-card" />
      <StyledPlayIcon>
        <FaPlayCircle size="60px" />
      </StyledPlayIcon>
    </StyledVideoCardContainer>
  );
};

export default VideoCard;
