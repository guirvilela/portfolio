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

import arrowIcon from "../../../assets/icons/arrow.svg";
import curriculoBr from "../../../assets/pdf/Profile-br.pdf";
import curriculoEn from "../../../assets/pdf/Profile-en.pdf";
import experiences from "../../../mocks/mock-experience.json";
import projects from "../../../mocks/mock-projects.json";

export function HomeRigth() {
  return (
    <RigthContainer id="about">
      <SectionDescription>
        <h1>Sobre</h1>

        <ProfileDescription>
          Desenvolvedor Front-end Web e Mobile com 5 anos de experiência.
          Especializado em{" "}
          <b>
            JavaScript, React/Next.js, Angular 11, Jest e Cypress. Proficiente
            em Scrum
          </b>
          , com experiência em mentoria e treinamento em testes unitários.
          Profissional com diploma de Bacharel em Ciência da Computação pela
          UNIS-MG em Varginha.
        </ProfileDescription>
      </SectionDescription>

      <Separator id="experiences" />

      <SectionExperiences>
        <h1>Experiência</h1>
        <ExperienceContainer>
          {experiences.map((experience) => (
            <Card
              key={`experience-${experience.id}`}
              functionTitle={experience.role}
              company={experience.company}
              date={experience.date}
              description={experience.description}
              techs={experience.techs}
            />
          ))}
        </ExperienceContainer>

        <BtnFileContainer>
          <BtnFile href={curriculoBr} download="curriculo_guilherme-vilela.pdf">
            &#x1F1E7;&#x1F1F7; Ver resumo completo <img src={arrowIcon} />
          </BtnFile>
          <BtnFile href={curriculoEn} download="resume_guilherme-vilela.pdf">
            &#127482;&#127480; View full resume <img src={arrowIcon} />
          </BtnFile>
        </BtnFileContainer>
      </SectionExperiences>

      <Separator id="projects" />

      <SectionProjects>
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
      </SectionProjects>
    </RigthContainer>
  );
}
