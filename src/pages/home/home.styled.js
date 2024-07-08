import styled from "styled-components";

export const StyledBgImage = styled.img`
  position: absolute;
  top: 64px;
  width: -webkit-fill-available;
`;

export const StyledMainContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledHomeCenterDiv = styled.div`
  position: absolute;
  top: 42%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const StyledAcademyLogo = styled.img`
  width: 235px;
  mix-blend-mode: screen;
  z-index: 1;
`;

export const StyledAcademyInfoDiv = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  flex-flow: column;
  animation: _fadeIn_n48rd_1 0.8s ease, _dragUpText_n48rd_1 0.8s ease;
`;

export const StyledBoldText = styled.span`
  color: var(--White-80, rgba(255, 255, 255, 0.8));
`;

export const StyledText = styled.p`
  mix-blend-mode: plus-lighter;
  color: var(--White-40, rgba(255, 255, 255, 0.4));
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin: 0;
  margin-top: 5px;
`;
