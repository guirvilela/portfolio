import { HomeLeft } from "../../components/Home/Left";
import { HomeRigth } from "../../components/Home/Rigth";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HomeLeft />
      <HomeRigth />
    </HomeContainer>
  );
}
