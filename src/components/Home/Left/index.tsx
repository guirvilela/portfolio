import {
  Contacts,
  LeftContainer,
  Option,
  OptionsLink,
  ProfileInfo,
} from "./styles";

import LinkedinIcon from "../../..//assets/icons/linkedin.svg";
import GitHubIcon from "../../../assets/icons/github.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import { IconLink } from "../../IconLink";

export function HomeLeft() {
  return (
    <LeftContainer>
      <div>
        <ProfileInfo>
          <h1>Guilherme Ribeiro Vilela</h1>
          <h2>Desenvolvedor Front-End </h2>
        </ProfileInfo>

        <OptionsLink>
          <Option>
            <span></span>
            <a>Sobre</a>
          </Option>
          <Option>
            <span></span>
            <a>Skills</a>
          </Option>
          <Option>
            <span></span>
            <a>Projetos</a>
          </Option>
        </OptionsLink>
      </div>

      <Contacts>
        <IconLink
          alt="GitHub"
          href="https://github.com/guirvilela"
          image={GitHubIcon}
        />
        <IconLink
          alt="Linkedin"
          href="https://www.linkedin.com/in/guilhermeribeirovilela/"
          image={LinkedinIcon}
        />
        <IconLink
          alt="Instagram"
          href="https://www.instagram.com/guirvilela/?next=%2F"
          image={InstagramIcon}
        />
      </Contacts>
    </LeftContainer>
  );
}
