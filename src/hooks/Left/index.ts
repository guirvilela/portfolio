import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import AngularIcon from "../../assets/icons/techs/angular.svg";
import CssIcon from "../../assets/icons/techs/css.svg";
import CypressIcon from "../../assets/icons/techs/cypress.svg";
import HtmlIcon from "../../assets/icons/techs/html.svg";
import JavascriptIcon from "../../assets/icons/techs/javascript.svg";
import JestIcon from "../../assets/icons/techs/jest.svg";
import ReactIcon from "../../assets/icons/techs/react.svg";
import SassIcon from "../../assets/icons/techs/sass.svg";
import StorybookIcon from "../../assets/icons/techs/storybook.svg";
import TypescriptIcon from "../../assets/icons/techs/typescript.svg";

export function useLeftController() {
  const { i18n } = useTranslation();

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

      if (!aboutSection || !experiencesSection || !projectsSection) {
        return;
      }

      const aboutRect = aboutSection.getBoundingClientRect();
      const experiencesRect = experiencesSection.getBoundingClientRect();
      const projectsRect = projectsSection.getBoundingClientRect();

      if (aboutRect.top > -287) {
        const aboutElement = document.querySelector(".about");
        if (aboutElement) {
          aboutElement.classList.add("active");
        }
      } else {
        const aboutElement = document.querySelector(".about");
        if (aboutElement) {
          aboutElement.classList.remove("active");
        }
      }

      if (experiencesRect.bottom <= 2 && projectsRect.top > 70) {
        const experiencesElement = document.querySelector(".experiences");
        if (experiencesElement) {
          experiencesElement.classList.add("active");
        }
      } else {
        const experiencesElement = document.querySelector(".experiences");
        if (experiencesElement) {
          experiencesElement.classList.remove("active");
        }
      }

      if (projectsRect.top < 70) {
        const projectsElement = document.querySelector(".projects");
        if (projectsElement) {
          projectsElement.classList.add("active");
        }
      } else {
        const projectsElement = document.querySelector(".projects");
        if (projectsElement) {
          projectsElement.classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChangeLanguages = useCallback(
    (language: "pt" | "en") => {
      return i18n.changeLanguage(language);
    },
    [i18n]
  );

  const handleOptionClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    activeSection,
    handleChangeLanguages,
    iconOrganize,
    handleOptionClick,
  };
}
