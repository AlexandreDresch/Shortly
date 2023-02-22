import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { MainButton } from "../../components/MainButton";

import { Container, FormContainer } from "./styles";

export function SignIn() {
    return (
        <Container>
            <Header />

            <FormContainer>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha"/>
            </FormContainer>

            <MainButton text="Entrar"/>
        </Container>
    )
}