import { ProfileDescription, RigthContainer, Techs } from "./styles";

import AngularIcon from "../../../assets/icons/techs/angular.svg";
import CssIcon from "../../../assets/icons/techs/css.svg";
import HtmlIcon from "../../../assets/icons/techs/html.svg";
import JavascriptIcon from "../../../assets/icons/techs/javascript.svg";
import JestIcon from "../../../assets/icons/techs/jest.svg";
import ReactIcon from "../../../assets/icons/techs/react.svg";
import SassIcon from "../../../assets/icons/techs/sass.svg";
import StorybookIcon from "../../../assets/icons/techs/storybook.svg";
import TypescriptIcon from "../../../assets/icons/techs/typescript.svg";

export function HomeRigth() {
  return (
    <RigthContainer>
      <ProfileDescription>
        Desenvolvedor Front-end Web e Mobile com 5 anos de experiência.
        Especializado em{" "}
        <b>
          JavaScript, React/Next.js, Angular 11, Jest e Cypress. Proficiente em
          Scrum
        </b>
        , com experiência em mentoria e treinamento em testes unitários.
        Profissional com diploma de Bacharel em Ciência da Computação pela
        UNIS-MG em Varginha.
      </ProfileDescription>

      <Techs>
        <img src={HtmlIcon} />
        <img src={CssIcon} />
        <img src={JavascriptIcon} />
        <img src={TypescriptIcon} />
        <img src={AngularIcon} />
        <img src={ReactIcon} />
        <img src={SassIcon} />
        <img src={StorybookIcon} />
        <img src={JestIcon} />
      </Techs>
    </RigthContainer>
  );
}
