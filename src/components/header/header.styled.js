import { IoSearch } from "react-icons/io5";
import styled from "styled-components";
import Hamburger from "../hamburger";

export const StyledHeader = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(5px);
  background-color: #00000040;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);

  @media (min-width: 360px) and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const StyledHeaderBody = styled.div`
  height: 42.5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 360px) and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 38px;
  }
`;

export const StyledLogoDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 360px) and (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const StyledLogo = styled.img`
  height: 42px;
  width: 97px;
  margin-left: 50px;
  cursor: pointer;

  @media (min-width: 360px) and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const StyledNavItemsDiv = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 40px;
  height: 100%;
`;

export const StyledSearchAndAuthDiv = styled.div`
  height: 100%;
  margin-right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchContainer = styled.div`
  display: flex;
  width: 20%;
  padding: 10px 16px;
  align-items: center;
  flex: 1;
  gap: 0.5rem;
  position: relative;

  @media (min-width: 360px) and (max-width: 768px) {
    display: none;
  }
`;

export const StyledItem = styled.span`
  font-family: sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1.117px;
  display: flex;
  align-items: center;
  color: #ffffffb3;
  cursor: pointer;
  transition: 0.05s ease-in-out;
  justify-content: center;
  position: relative;
  padding: 0 6px;

  @media (min-width: 360px) and (max-width: 768px) {
    display: none;
  }
`;

export const StyledAcademyItem = styled(StyledItem)`
  margin-bottom: -13px;
  border-bottom: 4px solid white;
  padding-bottom: 7px;
`;

export const StyledAcademyItemDiv = styled.div`
  font-weight: 600;
  color: #fff;
`;

export const StyledSearchIcon = styled(IoSearch)`
  height: 16px;
  width: 16px;
  position: absolute;
  color: #fff6;
  left: 25px;
`;

export const StyledSearchInput = styled.input`
  display: flex;
  border-radius: 100px;
  width: 440px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.07);
  padding: 10px 16px;
  align-items: center;
  flex: 1;
  overflow: hidden;
  gap: 0.5rem;
  position: relative;
  color: #fff;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  cursor: text;
  line-height: 20px;
  letter-spacing: 0.138px;
  text-indent: 15px;

  &::placeholder {
    text-indent: 15px;
  }
`;

export const StyledBroadcastDiv = styled.div`
  width: 42.5px;
  height: 42.5px;
  backdrop-filter: blur(12px);
  background: rgba(60, 32, 140, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fa8922;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
`;

export const StyledAuthButton = styled.button`
  color: #000;
  height: 30px;
  white-space: nowrap;
  background-color: #fff;
  border-radius: 4px;
  padding: 7px 24px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  @media (min-width: 360px) and (max-width: 768px) {
    padding: 3px 12px;
    height: 30px;
  }
`;

export const StyledBroadcastAndAuthDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const StyledNewBadge = styled.div`
  border-radius: 7px;
  background-color: rgb(100, 53, 233);
  color: #fff;
  margin-left: 0.5rem !important;
  font-size: 9px;
  padding: 5px;
`;

export const StyledHamburger = styled(Hamburger)`
  display: none;

  @media (min-width: 360px) and (max-width: 768px) {
    display: block;
  }
`;
