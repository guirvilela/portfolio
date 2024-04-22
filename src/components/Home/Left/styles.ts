import styled from "styled-components";

interface LanguagesProps {
  lang: string;
}

export const LeftContainer = styled.header`
  max-height: 100vh;
  padding: 6rem 2rem;

  display: flex;
  flex: 1 1 60%;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 0;

  @media (max-width: 980px) {
    position: relative;
  }

  @media (max-width: 600px) {
  }
`;

export const ProfileInfo = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export const Languages = styled.div<LanguagesProps>`
  display: flex;
  gap: 8px;
  margin-top: 4px;

  ${({ lang }) =>
    lang === "pt"
      ? `
    button:nth-child(1) {
      scale: 1.3; 
    }
  `
      : `
  button:nth-child(2) {
    scale: 1.3; 
  }
`}
`;

export const OptionsLink = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 150px;
  margin-bottom: 3rem;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const Option = styled.a`
  display: flex;
  list-style: none;
  align-items: center;
  text-decoration: none;
  gap: 8px;
  cursor: pointer;
  transition: width 0.2s ease-in-out;

  span {
    opacity: 0.5;
    width: 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.unpress};
    opacity: 0.7;
    transition: width 0.2s ease-in-out;
  }
  li {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.unpress};
    opacity: 0.7;
  }

  &:hover {
    span {
      width: 80px;
      background-color: ${({ theme }) => theme.colors.shade};
      opacity: 1;
    }

    li {
      color: ${({ theme }) => theme.colors.shade};
      opacity: 1;
    }
  }

  &.active {
    span {
      width: 80px;
      background-color: ${({ theme }) => theme.colors.shade};
      opacity: 1;
    }

    li {
      color: ${({ theme }) => theme.colors.shade};
      opacity: 1;
    }
  }
`;

export const Techs = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 2.5rem;

  div:nth-child(9),
  div:nth-child(10),
  div:nth-child(11) {
    img {
      width: 26px;
    }
  }

  div:hover {
    filter: brightness(2);
  }

  img {
    width: 36px;
    transition: filter 0.3s ease-in-out;
  }

  @media (max-width: 980px) {
    margin-bottom: 8rem;
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  }
`;

export const Contacts = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  list-style: none;

  li {
    img {
      width: 30px;
      height: 30px;
      transition: filter 0.3s ease-in-out;

      &:hover {
        filter: brightness(2);
      }
    }
  }
`;
