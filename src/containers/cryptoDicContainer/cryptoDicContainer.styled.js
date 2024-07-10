import styled from "styled-components";

export const StyledMainCrytoDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 40px;
`;

export const StyledCryptoTitleDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledCardContainerDiv = styled.div`
  margin-top: 30px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--White-20, rgba(255, 255, 255, 0.2));

  @media (min-width: 360px) and (max-width: 1284px) {
    width: 80%;
  }
`;

export const StyledHeading = styled.span`
  color: var(--White-100, #fff);
  font-size: 24px;
  line-height: 30px;
`;

export const StyledText = styled.span`
  color: var(--White-40, rgba(255, 255, 255, 0.4));
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledCardBottomDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 20%;
  position: absolute;
  bottom: 1px;
  left: 1px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  z-index: 3;
`;

export const StyledIconContainer = styled.div`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border: 1px solid var(--White-20, rgba(255, 255, 255, 0.2));
  background: var(--Black-40, rgba(0, 0, 0, 0.4));
  backdrop-filter: blur(20px);
  font-size: 20px;
  position: absolute;
  right: 70px;
  bottom: 10px;

  @media (min-width: 360px) and (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  bottom: 14px;
`;

export const StyledTextHeading = styled.span`
  color: #fff9;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  line-height: 30px;
  mix-blend-mode: plus-lighter;

  @media (min-width: 360px) and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const StyledTextPara = styled.span`
  color: var(--White-40, rgba(255, 255, 255, 0.4));
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  line-height: 20px;
  mix-blend-mode: plus-lighter;

  @media (min-width: 360px) and (max-width: 768px) {
    font-size: 12px;
    line-height: 12px;
  }
`;
