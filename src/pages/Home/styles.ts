import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
