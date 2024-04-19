import {
  Contacts,
  LeftContainer,
  Option,
  OptionsLink,
  ProfileInfo,
  Techs,
} from "./styles";

import GitHubIcon from "../../../assets/icons/github.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";
import { IconLink } from "../../IconLink";

import AngularIcon from "../../../assets/icons/techs/angular.svg";
import CssIcon from "../../../assets/icons/techs/css.svg";
import CypressIcon from "../../../assets/icons/techs/cypress.svg";
import HtmlIcon from "../../../assets/icons/techs/html.svg";
import JavascriptIcon from "../../../assets/icons/techs/javascript.svg";
import JestIcon from "../../../assets/icons/techs/jest.svg";
import ReactIcon from "../../../assets/icons/techs/react.svg";
import SassIcon from "../../../assets/icons/techs/sass.svg";
import StorybookIcon from "../../../assets/icons/techs/storybook.svg";
import TypescriptIcon from "../../../assets/icons/techs/typescript.svg";
import techs from "../../../mocks/mock-techs.json";
import { Tooltip } from "../../Tooltip";

import React from "react";

export function HomeLeft() {
  const [activeSection, setActiveSection] = React.useState("about");

  const iconOrganize = React.useCallback((icon: string) => {
    const types: Record<string, string> = {
      angular: AngularIcon,
      css: CssIcon,
      html: HtmlIcon,
      javascript: JavascriptIcon,
      jest: JestIcon,
      react: ReactIcon,
      sass: SassIcon,
      storybook: StorybookIcon,
      typescript: TypescriptIcon,
      cypress: CypressIcon,
    };

    return types[icon];
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      const aboutSection = document.getElementById("about");
      const experiencesSection = document.getElementById("experiences");
      const projectsSection = document.getElementById("projects");

      const aboutRect = aboutSection.getBoundingClientRect();
      const experiencesRect = experiencesSection.getBoundingClientRect();
      const projectsRect = projectsSection.getBoundingClientRect();

      console.log(aboutRect);

      if (aboutRect.top > -290) {
        document.querySelector(".about").classList.add("active");
      } else {
        document.querySelector(".about").classList.remove("active");
      }

      if (experiencesRect.bottom <= 0 && projectsRect.top > 70) {
        document.querySelector(".experiences").classList.add("active");
      } else {
        document.querySelector(".experiences").classList.remove("active");
      }

      if (projectsRect.top < 70) {
        document.querySelector(".projects").classList.add("active");
      } else {
        document.querySelector(".projects").classList.remove("active");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOptionClick = React.useCallback(
    (sectionId: string) => setActiveSection(sectionId),
    []
  );

  return (
    <LeftContainer>
      <div>
        <ProfileInfo>
          <h1>Guilherme Ribeiro Vilela</h1>
          <h2>Desenvolvedor Front-End </h2>
        </ProfileInfo>

        <OptionsLink>
          <Option
            href="#about"
            className={activeSection === "about" ? "about active" : "about"}
            onClick={() => handleOptionClick("about")}
          >
            <span></span>
            <li>Sobre</li>
          </Option>
          <Option
            href="#experiences"
            className={
              activeSection === "experiences"
                ? "experiences active"
                : "experiences"
            }
            onClick={() => handleOptionClick("experiences")}
          >
            <span></span>
            <li>Experiências</li>
          </Option>

          <Option
            href="#projects"
            className={
              activeSection === "projects" ? "projects active" : "projects"
            }
            onClick={() => handleOptionClick("projects")}
          >
            <span></span>
            <li>Projetos</li>
          </Option>
        </OptionsLink>

        <Techs>
          {techs.map(({ id, tech, icon }) => (
            <Tooltip key={`tech-${id}`} content={tech}>
              <img src={iconOrganize(icon)} />
            </Tooltip>
          ))}
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
