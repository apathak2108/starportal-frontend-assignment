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
  StyledImageDiv,
} from "./homeContainer.styled";
import RightArrow from "../../assets/body/right-arrow.svg";
import { STRINGS } from "../../constants/strings";
import VideoCardContainer from "../videoCardContainer";
import CryptoDicContainer from "../cryptoDicContainer";
import LargeCard from "../../components/largeCard";

const HomeContainer = () => {
  return (
    <>
      <div style={{ position: "relative", display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
        <StyledMainContainer>
          <StyledImageDiv>
            <StyledBgImage src={MainBgImage} alt="background-image" />
          </StyledImageDiv>
          <StyledHomeCenterDiv>
            <div>
              <StyledAcademyLogo
                src={AcademyLogo}
                alt="academy-animated-logo"
              />
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
        </StyledMainContainer>
        <hr
          style={{ width: "100%", opacity: "0.1", margin: "20px 0 20px 0" }}
        />
        <VideoCardContainer />
        <hr
          style={{ width: "100%", opacity: "0.1", margin: "40px 0 20px 0" }}
        />
        <CryptoDicContainer />
        <StyledTabSwitcher>
          <StyledTabS1>Essentials</StyledTabS1>
          <StyledTabS2>Alpha Hub</StyledTabS2>
        </StyledTabSwitcher>
        <hr
          style={{ width: "100%", opacity: "0.1", margin: "20px 0 20px 0" }}
        />
      </div>
      <LargeCard />
    </>
  );
};

export default HomeContainer;
