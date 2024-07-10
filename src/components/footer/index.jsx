import React from "react";
import {
  ContentOneDivOne,
  ContentOneDivTwo,
  DivTwoSpan,
  StyledFooterContainer,
  StyledFooterContentOne,
  StyledFooterContentThree,
  StyledFooterContentTwo,
  StyledFooterInnerContainer,
  StyledBoldText,
  StyledIconDiv,
  StyledDivTwoSpanContainer,
  StyledIconsContainer,
  StyledSpan,
} from "./footer.styled";
import Logo from "../../assets/header/logo.svg";
import { STRINGS } from "../../constants/strings";
import {
  FaTwitter,
  FaDiscord,
  FaTelegramPlane,
  FaSpotify,
} from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterInnerContainer>
        <StyledFooterContentOne>
          <ContentOneDivOne>
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div style={{ color: "#7d7d7d" }}>{STRINGS.FOOTER_TEXT_1}</div>
          </ContentOneDivOne>
          <ContentOneDivTwo>
            <StyledDivTwoSpanContainer>
              <DivTwoSpan>
                <StyledBoldText>INTRACT</StyledBoldText>
                <StyledSpan>Explore Quests</StyledSpan>
                <StyledSpan>Communities</StyledSpan>
                <StyledSpan>Alpha Hub</StyledSpan>
              </DivTwoSpan>
              <DivTwoSpan>
                <StyledBoldText>ABOUT</StyledBoldText>
                <StyledSpan>Product Roadmap</StyledSpan>
                <StyledSpan>Affiliate Program</StyledSpan>
                <StyledSpan>Sign Up Program</StyledSpan>
                <StyledSpan>Growth Community</StyledSpan>
                <StyledSpan>Blogs</StyledSpan>
              </DivTwoSpan>
            </StyledDivTwoSpanContainer>
            <StyledDivTwoSpanContainer>
              <DivTwoSpan>
                <StyledBoldText>EARN</StyledBoldText>
                <StyledSpan>Refer & Earn</StyledSpan>
                <StyledSpan>Leaderbord</StyledSpan>
                <StyledSpan>Achievements</StyledSpan>
              </DivTwoSpan>
              <DivTwoSpan>
                <StyledBoldText>SUPPORT</StyledBoldText>
                <StyledSpan>Help Center</StyledSpan>
                <StyledSpan>Create your quest</StyledSpan>
                <StyledSpan>Terms of Service</StyledSpan>
                <StyledSpan>Privacy Policy</StyledSpan>
                <StyledSpan>Community Guidelines</StyledSpan>
              </DivTwoSpan>
            </StyledDivTwoSpanContainer>
          </ContentOneDivTwo>
        </StyledFooterContentOne>
        <hr style={{ width: "100%", opacity: "0.3" }} />
        <StyledFooterContentTwo>
          <p>
            <b style={{ color: "#fff", opacity: "0.75" }}>Disclaimer:</b> Crypto
            Products, Virtual Digital Assets, and NFTs are unregulated and can
            be highly risky. There may be no regulatory recourse for any loss
            from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </p>
        </StyledFooterContentTwo>
        <hr style={{ width: "100%", opacity: "0.3" }} />
        <StyledFooterContentThree>
          <StyledBoldText>
            CREATED BY <u>INTRACT</u>
          </StyledBoldText>
          <StyledIconsContainer>
            <StyledIconDiv>
              <FaTwitter color="#1DA1F2" />
            </StyledIconDiv>
            <StyledIconDiv>
              <FaDiscord color="#7289d9" />
            </StyledIconDiv>
            <StyledIconDiv>
              <FaTelegramPlane color="#0088cc" />
            </StyledIconDiv>
            <StyledIconDiv>
              <FaSpotify color="#1ED760" />
            </StyledIconDiv>
          </StyledIconsContainer>
        </StyledFooterContentThree>
      </StyledFooterInnerContainer>
    </StyledFooterContainer>
  );
};

export default Footer;
