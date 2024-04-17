import styled from "styled-components";

export const CardContainer = styled.li`
  list-style: none;
  display: flex;
  position: relative;
  z-index: 1;
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
  height: 110%;

  position: absolute;
  opacity: 0;
  padding: 1rem;

  bottom: -14px;
  right: -12px;

  border-radius: 12px;
  transition: opacity 0.3s;
`;

export const DatePictureContainer = styled.div`
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
