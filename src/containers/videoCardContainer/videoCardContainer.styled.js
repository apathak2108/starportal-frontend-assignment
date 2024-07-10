import styled from "styled-components";

export const StyledCardMainDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 40px;
`;

export const StyledCardsTitleDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledCardsContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
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
