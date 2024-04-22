import {
  Contacts,
  Languages,
  LeftContainer,
  Option,
  OptionsLink,
  ProfileInfo,
  Techs,
} from "./styles";

import BrazilImage from "../../../assets/icons/flags/brazil.svg";
import UsaImage from "../../../assets/icons/flags/usa.svg";
import GitHubIcon from "../../../assets/icons/github.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import LinkedinIcon from "../../../assets/icons/linkedin.svg";
import { IconLink } from "../../IconLink";

import techs from "../../../mocks/mock-techs.json";
import { Tooltip } from "../../Tooltip";

import { useTranslation } from "react-i18next";
import { useLeftController } from "../../../hooks/Left";

export function HomeLeft() {
  const { t, i18n } = useTranslation();

  const {
    activeSection,
    iconOrganize,
    handleOptionClick,
    handleChangeLanguages,
  } = useLeftController();

  return (
    <LeftContainer>
      <div>
        <ProfileInfo>
          <h1>Guilherme Ribeiro Vilela</h1>

          <h2>{t("left_profile")}</h2>
          <Languages lang={i18n.language}>
            <button onClick={() => handleChangeLanguages("pt")}>
              <img src={BrazilImage} />
            </button>
            <button onClick={() => handleChangeLanguages("en")}>
              <img src={UsaImage} />
            </button>
          </Languages>
        </ProfileInfo>

        <OptionsLink>
          <Option
            className={activeSection === "about" ? "about active" : "about"}
            onClick={() => handleOptionClick("about")}
          >
            <span></span>
            <li>{t("reuse_about")}</li>
          </Option>
          <Option
            className={
              activeSection === "experiences"
                ? "experiences active"
                : "experiences"
            }
            onClick={() => handleOptionClick("experiences")}
          >
            <span></span>
            <li>{t("reuse_experiences")}</li>
          </Option>

          <Option
            className={
              activeSection === "projects" ? "projects active" : "projects"
            }
            onClick={() => handleOptionClick("projects")}
          >
            <span></span>
            <li>{t("reuse_projects")}</li>
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
        <Tooltip content={"Github"}>
          <IconLink
            alt="GitHub"
            href="https://github.com/guirvilela"
            image={GitHubIcon}
          />
        </Tooltip>
        <Tooltip content={"Linkedin"}>
          <IconLink
            alt="Linkedin"
            href="https://www.linkedin.com/in/guilhermeribeirovilela/"
            image={LinkedinIcon}
          />
        </Tooltip>
        <Tooltip content={"Instagram"}>
          <IconLink
            alt="Instagram"
            href="https://www.instagram.com/guirvilela/?next=%2F"
            image={InstagramIcon}
          />
        </Tooltip>
      </Contacts>
    </LeftContainer>
  );
}
