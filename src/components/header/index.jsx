import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { STRINGS } from "../../constants/strings";

import {
  StyledHeader,
  StyledLogoDiv,
  StyledLogo,
  StyledNavItemsDiv,
  StyledItem,
  StyledSearchIcon,
  StyledBroadcastDiv,
  StyledAuthButton,
  StyledNewBadge,
  StyledHeaderBody,
  StyledSearchAndAuthDiv,
  StyledSearchInput,
  StyledSearchContainer,
  StyledAcademyItem,
  StyledAcademyItemDiv,
  StyledBroadcastAndAuthDiv,
  StyledHamburger,
} from "./header.styled";
import Logo from "../../assets/header/logo.svg";
import BroadcastIcon from "../../assets/header/broadcast-icon.svg";

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderBody>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <StyledLogoDiv>
            <StyledLogo src={Logo} alt="logo" />
          </StyledLogoDiv>
          <StyledNavItemsDiv>
            <StyledItem>{STRINGS.COMPASS}</StyledItem>
            <StyledItem>{STRINGS.EXPLORE}</StyledItem>
            <StyledAcademyItem>
              <StyledAcademyItemDiv>{STRINGS.ACADEMEY}</StyledAcademyItemDiv>
              <StyledNewBadge>{STRINGS.NEW}</StyledNewBadge>
            </StyledAcademyItem>
            <StyledItem>{STRINGS.NFTS}</StyledItem>
            <StyledItem>{STRINGS.FOR_PROJECTS}</StyledItem>
          </StyledNavItemsDiv>
        </div>
        <div>
          <StyledSearchAndAuthDiv>
            <StyledSearchContainer>
              <StyledSearchIcon />
              <StyledSearchInput placeholder={STRINGS.SEARCH_PLACEHOLDER} />
            </StyledSearchContainer>
            <StyledBroadcastAndAuthDiv>
              <StyledBroadcastDiv>
                <img src={BroadcastIcon} alt="broadcast-icon" />
              </StyledBroadcastDiv>
              <StyledAuthButton>{STRINGS.SIGN_IN}</StyledAuthButton>
              <StyledHamburger />
            </StyledBroadcastAndAuthDiv>
          </StyledSearchAndAuthDiv>
        </div>
      </StyledHeaderBody>
    </StyledHeader>
  );
};

export default Header;
