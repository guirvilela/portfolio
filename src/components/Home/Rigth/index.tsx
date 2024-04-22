import { Card } from "../../Card";
import {
  BtnFile,
  BtnFileContainer,
  ExperienceContainer,
  ProfileDescription,
  RigthContainer,
  SectionDescription,
  SectionExperiences,
  SectionProjects,
  Separator,
} from "./styles";

import { useTranslation } from "react-i18next";
import arrowIcon from "../../../assets/icons/arrow.svg";
import curriculoBr from "../../../assets/pdf/Profile-br.pdf";
import curriculoEn from "../../../assets/pdf/Profile-en.pdf";
import experiences from "../../../mocks/mock-experience.json";
import projects from "../../../mocks/mock-projects.json";

export function HomeRigth() {
  const { t, i18n } = useTranslation();

  return (
    <RigthContainer id="about">
      <SectionDescription>
        <h1>{t("right_about")}</h1>

        <ProfileDescription
          dangerouslySetInnerHTML={{ __html: t("right_description") }}
        />
      </SectionDescription>

      <Separator id="experiences" />

      <SectionExperiences>
        <h1>{t("right_experiences")}</h1>
        <ExperienceContainer>
          {experiences.map((experience) => (
            <Card
              key={`experience-${experience.id}`}
              functionTitle={
                i18n.language === "pt" ? experience.role : experience.role_en
              }
              company={experience.company}
              date={
                i18n.language === "en" && experience.date_en
                  ? experience.date_en
                  : experience.date
              }
              description={
                i18n.language === "pt"
                  ? experience.description
                  : experience.description_en
              }
              techs={experience.techs}
            />
          ))}
        </ExperienceContainer>

        <BtnFileContainer>
          <BtnFile
            href={i18n.language === "pt" ? curriculoBr : curriculoEn}
            download={
              i18n.language === "pt"
                ? "curriculo_guilherme-vilela.pdf"
                : "resume_guilherme-vilela.pdf"
            }
          >
            {t("right_resume")} <img src={arrowIcon} alt="Arrow Icon" />
          </BtnFile>
        </BtnFileContainer>
      </SectionExperiences>

      <Separator id="projects" />

      <SectionProjects>
        <h1>{t("right_projects")}</h1>

        {projects.map((project) => (
          <Card
            key={`card-project-${project.id}`}
            functionTitle={
              i18n.language === "en" && project.title_en
                ? project.title_en
                : project.title
            }
            description={
              i18n.language === "pt"
                ? project.description
                : project.description_en
            }
            img={project.img}
            link={project.link}
            techs={project.techs}
            phone={project.phone}
          />
        ))}
      </SectionProjects>
    </RigthContainer>
  );
}
