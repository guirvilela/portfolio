import styled from "styled-components";

export const RigthContainer = styled.main`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  flex: 1 1 60%;
  flex-direction: column;
`;

export const ProfileDescription = styled.p`
  color: ${({ theme }) => theme.colors.unpress};
  line-height: 1.8;
  text-align: justify;

  b {
    color: ${({ theme }) => theme.colors.shade};
    opacity: 2;
    font-weight: 500;
  }
`;
