import styled from "styled-components";

export const StyledLargeAndSmallCardsContainerMainDiv = styled.main`
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 48px;
`;

export const StyledUpperDiv = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 360px) and (max-width: 908px) {
flex-flow: column;
gap: 80px;
  }
`;

export const StyledLowerDiv = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media(min-width: 360px) and (max-width: 908px) {
flex-flow: column;
gap: 80px;
  }

  `;
