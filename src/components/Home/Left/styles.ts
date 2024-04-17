import styled from "styled-components";

export const LeftContainer = styled.header`
  max-height: 100vh;
  padding: 6rem 2rem;

  display: flex;
  flex: 1 1 60%;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 0;
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

export const OptionsLink = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 150px;
  margin-bottom: 3rem;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: width 0.2s ease-in-out, span width 0.3s ease-in-out;

  span {
    opacity: 0.5;
    width: 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.unpress};
    opacity: 0.7;
    transition: width 0.2s ease-in-out;
  }
  a {
    color: ${({ theme }) => theme.colors.unpress};
    opacity: 0.7;
  }

  &:hover {
    span {
      width: 80px;
      background-color: ${({ theme }) => theme.colors.shade};
      opacity: 1;
    }

    a {
      color: ${({ theme }) => theme.colors.shade};
      opacity: 1;
    }
  }
`;

export const Techs = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  gap: 2rem;

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
        filter: brightness(1.3);
      }
    }
  }
`;
