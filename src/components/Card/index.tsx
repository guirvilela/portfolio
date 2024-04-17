import {
  CardBg,
  CardContainer,
  Company,
  DatePictureContainer,
  DateText,
  Description,
  DescriptionContainer,
  FunctionTitle,
  Tech,
  TextTech,
  TextTechContainer,
} from "./styles";

interface CardProps {
  functionTitle: string;
  date: string;
  description: string;
  techs: string[];
  company: string;
}

export function Card({
  functionTitle,
  date,
  description,
  techs,
  company,
}: CardProps) {
  return (
    <CardContainer>
      <CardBg className="card-background"></CardBg>

      <DatePictureContainer>
        <DateText>{date}</DateText>
      </DatePictureContainer>

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
    </CardContainer>
  );
}
