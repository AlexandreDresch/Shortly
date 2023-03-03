import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/Logo.svg";

import { UserContext } from "../../context/UserContext";

import { NavButton } from "./NavButton";

import {
  Container,
  WelcomeText,
  LogoImage,
  LogContainer,
  WelcomeContainer,
} from "./styles.js";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { userData, setUserData } = useContext(UserContext);
  const { pathname } = useLocation();

  function logOut() {
    setUserData("");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if(userData.token !== undefined) {
      setIsLoggedIn(true);
    };
  }, [userData])  

  return (
    <Container>
      <WelcomeContainer>
        {
            isLoggedIn &&
            <WelcomeText>Seja bem-vindo(a) {userData.name}!</WelcomeText>
        }
      </WelcomeContainer>

      <LogoImage src={Logo} />

      {isLoggedIn ? (
        <LogContainer>
          <NavButton text="Home" color={pathname === "/home" ? "#5D9040" : "#9c9c9c"} route="/home" />

          <NavButton text="Ranking" color={pathname === "/" ? "#5D9040" : "#9c9c9c"} route="/" />

          <NavButton text="Sair" color="#9c9c9c" route="/" onClick={logOut}/>
        </LogContainer>
      ) : (
        <LogContainer>
          <NavButton text="Entrar" color={pathname === "/sign-in" ? "#5D9040" : "#9c9c9c"} route="/sign-in" />

          <NavButton text="Cadastrar-se" color={pathname === "/sign-up" ? "#5D9040" : "#9c9c9c"} route="/sign-up" />
        </LogContainer>
      )}
    </Container>
  );
}
