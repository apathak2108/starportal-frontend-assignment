import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  bs-bg-opacity: 1;
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`;

export const StyledFooterInnerContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding: 28px 10px;
  max-width: 1284px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 25px;

  @media (min-width: 360px) and (max-width: 1284px) {
    margin-left: 30px;
  }
`;

export const StyledFooterContentOne = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 1.5rem;
  padding-right: 120px;
  gap: 60px;
  width: 90%;

  @media (min-width: 360px) and (max-width: 1284px) {
    flex-flow: column;
  }
`;

export const ContentOneDivOne = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  gap: 20px;

  @media (min-width: 360px) and (max-width: 1284px) {
    flex-flow: column;
  }
`;

export const ContentOneDivTwo = styled.div`
  display: flex;
  gap: 50px;

  @media (min-width: 360px) and (max-width: 1284px) {
    gap: 100px;
  }
`;

export const DivTwoSpan = styled.span`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  gap: 13px;
  color: #7d7d7d;
`;

export const StyledFooterContentTwo = styled.section`
  color: #7d7d7d;

  @media (min-width: 360px) and (max-width: 1284px) {
    width: 85%;
  }
`;

export const StyledFooterContentThree = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 1284px) {
    align-items: flex-start;
    flex-flow: column;
    gap: 20px;
  }
`;

export const StyledBoldText = styled.span`
  letter-spacing: 0.6px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1.25rem;
  padding: 0.5rem;
`;

export const StyledDivTwoSpanContainer = styled.div`
  display: flex;
  gap: 50px;

  @media (min-width: 360px) and (max-width: 1284px) {
    flex-flow: column;
    gap: 40px;
  }
`;

export const StyledSpan = styled.span`
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
