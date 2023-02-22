import Logo from "../../assets/Logo.svg";
import { NavButton } from "./NavButton";

import {
  Container,
  WelcomeText,
  LogoImage,
  LogContainer,
  WelcomeContainer,
} from "./styles.js";

export function Header() {
  const logged = false;
  return (
    <Container>
      <WelcomeContainer>
        {
            logged &&
            <WelcomeText>Seja bem-vindo(a) Pessoa!</WelcomeText>
        }
      </WelcomeContainer>

      <LogoImage src={Logo} />

      {logged ? (
        <LogContainer>
          <NavButton text="Home" color="#9c9c9c" route="/" />

          <NavButton text="Ranking" color="#9c9c9c" route="/ranking" />

          <NavButton text="Sair" color="#9c9c9c" route="/" />
        </LogContainer>
      ) : (
        <LogContainer>
          <NavButton text="Entrar" color="#5D9040" route="/sign-in" />

          <NavButton text="Cadastrar-se" color="#9c9c9c" route="/sign-up" />
        </LogContainer>
      )}
    </Container>
  );
}
