import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { MainButton } from "../../components/MainButton";

import { Container, FormContainer } from "./styles";

export function SignUp() {
    return (
        <Container>
            <Header />

            <FormContainer>
                <Input placeholder="Nome"/>
                <Input placeholder="E-mail"/>
                <Input placeholder="Senha"/>
                <Input placeholder="Confirmar senha"/>
            </FormContainer>

            <MainButton text="Criar Conta"/>
        </Container>
    )
}