import {
  CardBg,
  CardContainer,
  Company,
  DateContainer,
  DateText,
  Description,
  DescriptionContainer,
  DescriptionProjectContainer,
  FunctionTitle,
  LinkTitleContainer,
  ProjectContainer,
  ProjectPicture,
  Tech,
  TextTech,
  TextTechContainer,
} from "./styles";

import React from "react";
import arrowIcon from "../../assets/icons/arrow.svg";

import DevStoreImage from "../../assets/projects/devstore.png";
import GitHubExplorerImage from "../../assets/projects/githubExplorer.png";
import RentxImage from "../../assets/projects/rentX.png";
import SavePassImage from "../../assets/projects/savePass.png";
import WorldTrypImage from "../../assets/projects/worldTryp.png";

interface CardProps {
  functionTitle: string;
  date?: string;
  description: string;
  techs: string[];
  company?: string;
  img?: string;
  link?: string;
  phone?: boolean;
}

export function Card({
  functionTitle,
  date,
  description,
  techs,
  company,
  img,
  link,
  phone,
}: CardProps) {
  const ProjectIconApply = React.useCallback((icon: string) => {
    const types: Record<string, string> = {
      DevStore: DevStoreImage,
      WorldTryp: WorldTrypImage,
      RentX: RentxImage,
      GitHubExplorer: GitHubExplorerImage,
      SavePass: SavePassImage,
    };

    return types[icon];
  }, []);

  return (
    <>
      {!img ? (
        <CardContainer>
          <CardBg className="card-background"></CardBg>

          <>
            <DateContainer>
              <DateText>{date}</DateText>
            </DateContainer>

            <DescriptionContainer>
              <FunctionTitle>{functionTitle}</FunctionTitle>
              <Company>{company}</Company>
              <Description>{description}</Description>
              <TextTechContainer>
                {techs.map((tech, index) => (
                  <Tech key={`tech-card-${index}`}>
                    <TextTech>{tech}</TextTech>
                  </Tech>
                ))}
              </TextTechContainer>
            </DescriptionContainer>
          </>
        </CardContainer>
      ) : (
        <ProjectContainer href={link} target="_blank">
          <CardBg className="card-background bg-project"></CardBg>

          <ProjectPicture phone={phone}>
            <img src={ProjectIconApply(img)} />
          </ProjectPicture>

          <DescriptionProjectContainer>
            <LinkTitleContainer>
              <FunctionTitle>{functionTitle}</FunctionTitle>
              <img src={arrowIcon} className="project-link-img" />
            </LinkTitleContainer>
            <Description>{description}</Description>
            <TextTechContainer>
              {techs.map((tech, index) => (
                <Tech key={`tech-card-${index}`}>
                  <TextTech>{tech}</TextTech>
                </Tech>
              ))}
            </TextTechContainer>
          </DescriptionProjectContainer>
        </ProjectContainer>
      )}
    </>
  );
}
