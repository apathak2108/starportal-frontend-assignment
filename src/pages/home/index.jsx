import React from "react";
import Header from "../../components/header";
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
} from "./home.styled";
import {STRINGS} from "../../constants/strings";

const Home = () => {
  return (
    <StyledMainContainer>
      <Header />
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

          </StyledText>
          <StyledText>
            {STRINGS.ACADEMY_TEXT_2}
          </StyledText>
          <StyledText>
            {STRINGS.ACADEMY_TEXT_3}
            <StyledBoldText>{STRINGS.ACADEMY_BOLD_3}</StyledBoldText>
          </StyledText>
          
        </StyledAcademyInfoDiv>
      </StyledHomeCenterDiv>
    </StyledMainContainer>
  );
};

export default Home;
