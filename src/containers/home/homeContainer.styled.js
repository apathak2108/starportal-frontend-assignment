import styled from "styled-components";

export const StyledBgImage = styled.img`
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
  top: 33%;
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

export const StyledAcademyButton = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  padding: 10px 57px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 17px;
  width: 113px;
  border-radius: 8px;
  border: 1px solid var(--White-10, rgba(255, 255, 255, 0.1));
  background: #6435e9;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const StyledTabSwitcher = styled.div`
  border-radius: 1000px;
  border: 1px solid var(--White-07, rgba(255, 255, 255, 0.07));
  background: var(--White-05, rgba(255, 255, 255, 0.05));
  box-shadow: 0 4px 10px #0000001a;
  backdrop-filter: blur(10px);
  width: max-content;
  display: flex;
  position: fixed;
  z-index: 2000;
  bottom: 10%;
`;

export const StyledTabS1 = styled.div`
  display:flex;
  justify-content: center;
  padding: 12px 30px;
  border-radius: 1000px;
  background: var(--White-15, rgba(255, 255, 255, 0.15));
  mix-blend-mode: plus-lighter;
  box-shadow: 0 1px 1px #ffffff26 inset;
  width: 50%;
  height: 100%;
  transition: transform 0.5s ease;
  text-shadow: 0px 0.7px 1px rgba(0, 0, 0, 0.75);
`;

export const StyledTabS2 = styled.div`
  display: flex;
  padding: 0px 40px;
  width: 112px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.117px;
  color: #fff6;
  transition: color 0.5s ease;
`;
