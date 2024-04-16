import styled from "styled-components";

export const RigthContainer = styled.header`
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

export const Techs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;
  gap: 1rem;

  img {
    width: 34px;

    &:nth-child(9) {
      width: 24px;
    }
    &:nth-child(8) {
      width: 24px;
    }
  }
`;
