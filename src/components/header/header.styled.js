import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  top: 0;
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(5px);
  background-color: #00000040;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;
