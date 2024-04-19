import styled from "styled-components";

interface PictureProjectProps {
  phone?: boolean;
}

export const CardContainer = styled.li`
  list-style: none;
  display: flex;
  position: relative;
  opacity: 0.8;

  @media (min-width: 640px) {
    .sm\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
  }
  &:hover {
    opacity: 1;
    filter: brightness(1.3);
    .card-background {
      display: block;
      opacity: 0.2;
    }

    h2 {
      color: ${({ theme }) => theme.colors.green_500};
    }
  }
`;

export const CardBg = styled.div`
  background: ${({ theme }) => theme.colors.background_card};
  width: 105%;
  height: calc(100% + 30px);

  position: absolute;
  opacity: 0;

  bottom: -14px;
  right: -12px;

  border-radius: 12px;
  transition: opacity 0.3s;
`;

export const DateContainer = styled.div`
  flex: 1 1 20%;
`;

export const DateText = styled.span`
  font-size: 12px;

  color: ${({ theme }) => theme.colors.unpress};
`;

export const DescriptionContainer = styled.div`
  flex: 1 1 80%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FunctionTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.shade};
`;

export const Company = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.unpress};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.unpress};
  margin-bottom: 8px;
  text-align: justify;
`;

export const TextTechContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tech = styled.div`
  background: ${({ theme }) => theme.colors.green_400};
  padding: 0.25rem 0.45rem;
  border-radius: 50px;
`;

export const TextTech = styled.li`
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.green_500};
`;

export const ProjectContainer = styled.a`
  display: flex;
  text-decoration: none;
  position: relative;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    .card-background {
      display: block;
      opacity: 0.2;
    }

    h2 {
      color: ${({ theme }) => theme.colors.green_500};
    }

    h2,
    p,
    li {
      filter: brightness(1.3);
    }

    img {
      border-color: ${({ theme }) => theme.colors.border_climp};
    }

    .project-link-img {
      transform: translateY(-4px) translateX(4px);
    }
  }
`;

export const ProjectPicture = styled.div<PictureProjectProps>`
  flex: 1 1 20%;
  img {
    max-width: 85%;
    max-height: ${({ phone }) => (phone ? "85%" : "auto")};
    transition: border 0.2s ease-in-out;
    translate: 0 5px;

    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }
`;
export const DescriptionProjectContainer = styled.div`
  flex: 1 1 80%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinkTitleContainer = styled.div`
  display: flex;
  align-items: center;

  .project-link-img {
    width: 24px;
    height: 24px;

    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }
`;
