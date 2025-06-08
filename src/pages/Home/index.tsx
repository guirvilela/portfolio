import { HomeLeft } from "../../components/Home/Left";
import { Projects } from "../../components/Home/Projects";
import { HomeRight } from "../../components/Home/Rigth";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <HomeLeft />
        <HomeRight />
      </HomeContainer>

      <Projects />
    </>
  );
}
