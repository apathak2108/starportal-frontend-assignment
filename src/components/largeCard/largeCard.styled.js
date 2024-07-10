import styled from "styled-components";

export const StyledLargeCardContainer = styled.div`
  height: 579px;
  width: 520px;
  border: none;
  border-radius: 24px;
  display: flex;
  flex-flow: column;
  margin-left: 10px;

  @media (min-width: 360px) and (max-width: 768px) {
    height: 500px;
    width: 400px;
  }
`;

export const StyledUpperContainer = styled.section`
  height: 229px;
  color: #fff;
  border-radius: 24px 24px 0 0;
  background-color: #080808;
  font-family: Outfit, sans-serif;
  font-size: 14px;
  line-height: 1.2;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  position: relative;

  @media (min-width: 360px) and (max-width: 768px) {
    height: 160px;
  }
`;

export const StyledBottomContainer = styled.section`
  height: 350px;
  background-color: #101010;
  padding: 24px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-flow: column;
  border-radius: 0 0 24px 24px;
`;

export const StyledUpperDivOne = styled.div`
  width: 160px;
  height: 180px;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: var(--White-05, rgba(255, 255, 255, 0.05));
  position: relative;

  @media (min-width: 360px) and (max-width: 768px) {
    height: 100px;
    width: 80px;
  }
`;

export const StyledUpperDivOneImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

export const StyledUpperDivTwo = styled.div``;

export const StyledUpperDivTwoPartOne = styled.article`
  color: var(--White-100, #fff);
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 8px;

  @media (min-width: 360px) and (max-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

export const StyledUpperDivTwoPartTwo = styled.article`
  color: var(--White-40, rgba(255, 255, 255, 0.4));
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 360px) and (max-width: 768px) {
    font-size: 13px;
    line-height: 15px;
  }
`;

export const StyledUpperDivTwoPartThree = styled.article`
  margin-top: 16px;
`;

export const StyledRewardCountDiv = styled.div`
  height: 32px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border: 0.5px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.07);
  color: #fffc;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;

  @media (min-width: 360px) and (max-width: 768px) {
    height: 24px;
  }
`;

export const StyledQuestCountDiv = styled.div`
  width: max-content;
  padding: 11px 24px;
  gap: 8px;
  border-radius: 1000px;
  border: 1px solid var(--White-20, rgba(255, 255, 255, 0.2));
  background: var(--Black-40, rgba(0, 0, 0, 0.4));
  box-shadow: 0 0 5px #0000001a;
  backdrop-filter: blur(10px);
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translate(-50%);

  @media (min-width: 360px) and (max-width: 768px) {
    padding: 4px 12px;
  }
`;

export const StyledIconDiv = styled.div`
  position: absolute;
  height: 12px;
  width: 12px;
  top: 24px;
  right: 24px;
`;
