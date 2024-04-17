import {
  Contacts,
  LeftContainer,
  Option,
  OptionsLink,
  ProfileInfo,
  Techs,
} from "./styles";

import LinkedinIcon from "../../..//assets/icons/linkedin.svg";
import GitHubIcon from "../../../assets/icons/github.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import { IconLink } from "../../IconLink";
import AngularIcon from "../../../assets/icons/techs/angular.svg";
import CssIcon from "../../../assets/icons/techs/css.svg";
import HtmlIcon from "../../../assets/icons/techs/html.svg";
import JavascriptIcon from "../../../assets/icons/techs/javascript.svg";
import JestIcon from "../../../assets/icons/techs/jest.svg";
import ReactIcon from "../../../assets/icons/techs/react.svg";
import SassIcon from "../../../assets/icons/techs/sass.svg";
import StorybookIcon from "../../../assets/icons/techs/storybook.svg";
import TypescriptIcon from "../../../assets/icons/techs/typescript.svg";
import CypressIcon from "../../../assets/icons/techs/cypress.svg";
import { Tooltip } from "../../Tooltip";

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
            <a>Experiências</a>
          </Option>
          <Option>
            <span></span>
            <a>Projetos</a>
          </Option>
        </OptionsLink>

        <Techs>
          <Tooltip content="Html">
            <img src={HtmlIcon} />
          </Tooltip>
          <Tooltip content="Css">
            <img src={CssIcon} />
          </Tooltip>
          <Tooltip content="Javascript">
            <img src={JavascriptIcon} />
          </Tooltip>
          <Tooltip content="Typescript">
            <img src={TypescriptIcon} />
          </Tooltip>
          <Tooltip content="React">
            <img src={ReactIcon} />
          </Tooltip>
          <Tooltip content="React Native">
            <img src={ReactIcon} />
          </Tooltip>
          <Tooltip content="Angular">
            <img src={AngularIcon} />
          </Tooltip>
          <Tooltip content="Sass">
            <img src={SassIcon} />
          </Tooltip>
          <Tooltip content="Storybook">
            <img src={StorybookIcon} />
          </Tooltip>
          <Tooltip content="Jest">
            <img src={JestIcon} />
          </Tooltip>
          <Tooltip content="Cypress">
            <img src={CypressIcon} />
          </Tooltip>
        </Techs>
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
