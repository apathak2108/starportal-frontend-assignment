import styled from "styled-components";

export const StyledVideoCardContainer = styled.div`
  width: 283px;
  height: 420px;
  border-radius: 16px;
  border: 1px solid var(--White-20, rgba(255, 255, 255, 0.2));
  background: var(--White-05, rgba(255, 255, 255, 0.05));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledVideoImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const StyledPlayIcon = styled.div`
    z-index: 1;
    position: absolute;
`;
