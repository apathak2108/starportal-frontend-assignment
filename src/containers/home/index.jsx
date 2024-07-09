import React from "react";
import MainBgImage from "../../assets/body/main-bg.png";
import AcademyLogo from "../../assets/body/academyLogo.gif";
import {
  StyledBgImage,
  StyledMainContainer,
  StyledHomeCenterDiv,
  StyledAcademyLogo,
  StyledAcademyInfoDiv,
  StyledText,
  StyledBoldText,
  StyledAcademyButton,
  StyledTabSwitcher,
  StyledTabS1,
  StyledTabS2,
} from "./homeContainer.styled";
import RightArrow from "../../assets/body/right-arrow.svg";
import { STRINGS } from "../../constants/strings";

const HomeContainer = () => {
  return (
    <StyledMainContainer>
      <StyledBgImage src={MainBgImage} alt="background-image" />
      <StyledHomeCenterDiv>
        <div>
          <StyledAcademyLogo src={AcademyLogo} alt="academy-animated-logo" />
        </div>
        <StyledAcademyInfoDiv>
          <StyledText>
            <StyledBoldText>{STRINGS.ACADEMY_BOLD_1}</StyledBoldText>
            {STRINGS.ACADEMY_TEXT_1}
            <StyledBoldText>{STRINGS.ACADEMY_BOLD_2}</StyledBoldText>
            {STRINGS.ACADEMY_TEXT_2}
          </StyledText>
          <StyledText>
            {STRINGS.ACADEMY_TEXT_3}
            <StyledBoldText>{STRINGS.ACADEMY_BOLD_3}</StyledBoldText>
          </StyledText>
          <StyledAcademyButton>
            <span>{STRINGS.GET_STARTED}</span>
            <span>
              <img src={RightArrow} alt="right-arrow" />
            </span>
          </StyledAcademyButton>
        </StyledAcademyInfoDiv>
      </StyledHomeCenterDiv>
      <StyledTabSwitcher>
        <StyledTabS1>Essentials</StyledTabS1>
        <StyledTabS2>Alpha Hub</StyledTabS2>
      </StyledTabSwitcher>
    </StyledMainContainer>
  );
};

export default HomeContainer;
