import { useTranslation } from "react-i18next";
import projects from "../../../mocks/mock-projects.json";
import { Card } from "../../Card";
import { SectionProjects } from "../Rigth/styles";
import { CardProjects } from "./styles";

export function Projects() {
  const { t } = useTranslation();

  return (
    <SectionProjects>
      <div className="title-sticky">
        <div className="title-bg">
          <article />
          <h1>{t("reuse_projects")}</h1>
        </div>
      </div>

      <CardProjects>
        {projects.map((project) => (
          <Card
            key={`card-project-${project.id}`}
            functionTitle={project.title}
            description={project.description}
            img={project.img}
            link={project.link}
            techs={project.techs}
            phone={project.phone}
          />
        ))}
      </CardProjects>
    </SectionProjects>
  );
}
