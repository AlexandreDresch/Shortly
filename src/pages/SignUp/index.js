import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { MainButton } from "../../components/MainButton";

import { api } from "../../services/api";

import { Container, FormContainer } from "./styles";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post("/signup", {
        name: username,
        email,
        password,
        confirmPassword: repeatPassword,
      });

      navigate("/sign-in");
    } catch (error) {
      alert("Erro ao cadastrar usuário, tente novamente");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header />

      <FormContainer>
        <Input
          placeholder="Nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          type="text"
        />
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
        <Input
          placeholder="Confirmar senha"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          disabled={isLoading}
          type="password"
        />
      </FormContainer>

      <MainButton text="Criar Conta" disabled={isLoading} onClick={handleSignUp} />
    </Container>
  );
}
