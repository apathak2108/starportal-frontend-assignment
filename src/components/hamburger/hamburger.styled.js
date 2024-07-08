import styled from "styled-components";

export const StyledHamburgerDiv = styled.div`
  display: none;

  @media (min-width: 360px) and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 30px;
    height: 24px;
    cursor: pointer;
  }
`;

export const StyledHamburgerSpans = styled.span`
  width: 100%;
  height: 4px;
  background-color: #fff;
  border-radius: 10px;
`;
