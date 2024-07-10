import styled from "styled-components";

export const StyledSmallMainDiv = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;
  height: 390px;
  width: 264px;
`;

export const StyledDivOne = styled.article`
  display: flex;
  align-items: center;

`;

export const StyledDivTwo = styled.article`
  width: 157px;
  height: 177px;
  background: #131313;
  border-radius: 23.5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDivThree = styled.article`
  color: var(--White-60, rgba(255, 255, 255, 0.6));
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const StyledDivFour = styled.article`
  color: var(--White-20, rgba(255, 255, 255, 0.2));
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;
`;

export const StyledDivFive = styled.button`
  border-radius: 8px;
  border: 1px solid var(--White-05, rgba(255, 255, 255, 0.05));
  background: var(--White-05, rgba(255, 255, 255, 0.05));
  display: flex;
  width: 160px;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  color: var(--White-40, rgba(255, 255, 255, 0.4));
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  cursor: not-allowed !important;
`;

export const StyledTickDiv = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  border: 1px solid var(--White-20, rgba(255, 255, 255, 0.2));
  background: var(--White-05, rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  color: #fff3;
  font-size: 28px;
  margin-left: 55px;
`;

export const StyledImage = styled.img`
  height: 92%;
  width: 92%;
  border-radius: 12px;
`;
