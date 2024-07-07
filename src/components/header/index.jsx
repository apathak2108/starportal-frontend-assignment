import React from "react";
import { IoSearch } from "react-icons/io5";

import {
  StyledHeader,
  StyledLogo,
  StyledNavItems,
  StyledItem,
  StyledSearchBarDiv,
  StyledBroadcastDiv,
  StyledAuthButton,
  StyledNewBadge,
} from "./header.styled";
import Logo from "../../assets/header/logo.svg";
import BroadcastIcon from "../../assets/header/broadcast-icon.svg";

const Header = () => {
  return (
    <StyledHeader>
      <div
        style={{
          width: "55%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledLogo src={Logo} alt="logo" />
        <StyledNavItems>
          <StyledItem>Compass</StyledItem>
          <StyledItem>Explore</StyledItem>
          <StyledItem >
            <div>Academy</div>
            <StyledNewBadge>New</StyledNewBadge>
          </StyledItem>
          <StyledItem>NFTs</StyledItem>
          <StyledItem>For Projects</StyledItem>
        </StyledNavItems>
      </div>
      <div
        style={{
          display: "flex",
          width: "45%",
          gap: "3%",
          marginLeft: "1%",
          marginRight: "2.5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledSearchBarDiv>
          <IoSearch style={{ height: "16px", width: "16px" }} />
        </StyledSearchBarDiv>
        <StyledBroadcastDiv>
          <img src={BroadcastIcon} alt="broadcast-icon" />
        </StyledBroadcastDiv>
        <StyledAuthButton>Sign In</StyledAuthButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
