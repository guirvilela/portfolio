import styled from "styled-components";

export const TooltipContent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  transition: display 0.2s ease-in-out;

  &:hover div {
    opacity: 1;
  }

  div {
    position: absolute;
    bottom: -2rem;
    opacity: 0;
    transition: opacity 0.3s ease;

    b {
      white-space: nowrap;
      font-weight: 600;
    }
  }
`;
