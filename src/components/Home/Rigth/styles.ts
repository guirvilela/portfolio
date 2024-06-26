import styled from "styled-components";

export const RigthContainer = styled.main`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  flex: 1 1 60%;
  flex-direction: column;

  section {
    position: relative;
    h1 {
      display: none;
    }
    article {
      margin: 1rem 0;
    }

    @media (max-width: 980px) {
      .title-sticky {
        position: sticky;
        top: 0;
        z-index: 10;

        .title-bg {
          position: relative;
          padding: 1rem 0;
        }

        article {
          margin: 0;
          position: absolute;
          background-color: rgba(15, 23, 42, 0.75);
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(8px);
        }
      }

      h1 {
        display: block;
        font-size: 18px;
      }
    }
  }
`;

export const SectionDescription = styled.section``;

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

export const Separator = styled.span`
  width: 100%;
  margin: 3rem auto;
  max-width: 400px;
  height: 0.1px;
  opacity: 0.1;
  background: ${({ theme }) => theme.colors.shade};
`;

export const SectionExperiences = styled.section``;

export const ExperienceContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
`;

export const BtnFileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const BtnFile = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;

  img {
    width: 24px;
    height: 24px;

    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  &:hover {
    img {
      transform: translateY(-4px) translateX(4px);
    }

    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.green_500};
    transition: width 0.3s ease;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SectionProjects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
