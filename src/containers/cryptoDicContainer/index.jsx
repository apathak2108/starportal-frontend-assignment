import React from "react";
import {
  StyledCardBottomDiv,
  StyledCardContainerDiv,
  StyledCryptoTitleDiv,
  StyledHeading,
  StyledIconContainer,
  StyledImage,
  StyledMainCrytoDiv,
  StyledText,
  StyledTextContainer,
  StyledTextHeading,
  StyledTextPara,
} from "./cryptoDicContainer.styled";
import { IoBookOutline } from "react-icons/io5";
import CrytoDicImage from "../../assets/body/cryptoDicImage.svg";

const CryptoDicContainer = () => {
  return (
    <StyledMainCrytoDiv>
      <StyledCryptoTitleDiv>
        <StyledHeading>Crypto Dictionary</StyledHeading>
        <StyledText>Your one-stop to catch up on all crypto terms</StyledText>
      </StyledCryptoTitleDiv>
      <StyledCardContainerDiv>
        <StyledImage src={CrytoDicImage} alt="crypto-dict-image" />
        <StyledCardBottomDiv>
          <StyledTextContainer>
            <StyledTextHeading>Web3 + Degen Glossary</StyledTextHeading>
            <StyledTextPara>Your own crypto dictionary</StyledTextPara>
          </StyledTextContainer>
          <StyledIconContainer>
            <IoBookOutline />
          </StyledIconContainer>
        </StyledCardBottomDiv>
      </StyledCardContainerDiv>
    </StyledMainCrytoDiv>
  );
};

export default CryptoDicContainer;
