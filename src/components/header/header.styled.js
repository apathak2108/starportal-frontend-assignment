import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(5px);
  background-color: #00000040;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

export const StyledLogo = styled.img`
  height: 42px;
  width: 97px;
  margin-left: 50px;
  cursor: pointer;
`;

export const StyledNavItems = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 40px;
  height: 100%;
`;

export const StyledItem = styled.span`
  font-family: sans-serif;
  font-size: 16px;
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
`;

export const StyledSearchBarDiv = styled.div`
  display: flex;
  border-radius: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.07);
  padding: 10px 16px;
  align-items: center;
  flex: 1;
  gap: 0.5rem;
  position: relative;
`;

export const StyledSearchBar = styled.input`
  height: 42px;
  width: 60%;
  background: none;
  color: #fff;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  cursor: text;
  line-height: 20px;
  letter-spacing: 0.138px;
  border: none;
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
  white-space: nowrap;
  background-color: #fff;
  border-radius: 4px;
  padding: 7px 24px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

export const StyledNewBadge = styled.div`
  border-radius: 7px;
  background-color: rgb(100, 53, 233);
  color: #fff;
  margin-left: 0.5rem !important;
  font-size: 9px;
  padding: 5px;
`;