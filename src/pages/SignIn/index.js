import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { MainButton } from "../../components/MainButton";

import { UserContext } from "../../context/UserContext";

import { api } from "../../services/api";

import { Container, FormContainer } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  async function handleSignIn(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userData = await api.post("/signin", {
        email,
        password,
      });

      setUserData({
        name: "",
        token: userData.data.token,
      });

      navigate("/home");
    } catch (error) {
      alert("Erro ao efetuar login, tente novamente");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header />

      <FormContainer>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          type="email"
        />
        <Input
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          type="password"
        />
      </FormContainer>

      <MainButton text="Entrar" disabled={isLoading} onClick={handleSignIn}/>
    </Container>
  );
}
