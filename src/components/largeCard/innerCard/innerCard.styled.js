import styled from "styled-components";

export const StyledInnerCardContainer = styled.section`
  height: 98px;
  width: 455px;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid var(--White-05, rgba(255, 255, 255, 0.05));
  background: var(--White-05, rgba(255, 255, 255, 0.05));
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  position: relative;

  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%;
  }

`;

export const StyledInnerDivOne = styled.div`
  height: 80px;
  width: 120px;
  border-radius: 12px;
`;

export const StyledInnerDivTwo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

export const StyledDivTwoUpper = styled.div`
  color: var(--White-80, rgba(255, 255, 255, 0.8));
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledDivTwoBottom = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 12px;
  gap: 10px;
`;

export const StyledDivTwoBottomOne = styled.span`
  color: var(--White-60, rgba(255, 255, 255, 0.6));
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
`;

export const StyledDivTwoBottomTwo = styled.span`
  border-radius: 100px;
  border: 1px solid var(--Black-100, #000);
  background: var(--White-07, rgba(255, 255, 255, 0.07));
  box-shadow: 0 -2px 2px #0006 inset, 0 2px 2px #0006 inset;
  width: 195px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;

    @media (min-width: 360px) and (max-width: 768px) {
    width: 160px;
    height: 12px;

  }  
`;

export const StyledTickDiv = styled.div`
  display: flex;
  position: absolute;
  width: 18px;
  height: 18px;
  padding: 4px;
  bottom: 10px;
  right: 6px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1000px;
  border: 1px solid var(--White-10, rgba(255, 255, 255, 0.1));
  background: var(--White-05, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  color: #fff3;

    @media (min-width: 360px) and (max-width: 768px) {
    display: none;
  }
`;
