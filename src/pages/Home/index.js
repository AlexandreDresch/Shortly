import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { MainButton } from "../../components/MainButton";

import { Code, Container, FormContainer, Link, LinkContainer, LinkDeleteButton, LinksContainer, Views } from "./styles";

import TrashCanSVG from "../../assets/trash.svg";

let mock = [
    {link: "https://github.com", code: "e4787", views: 271},
    {link: "https://driven.com.br", code: "f9090", views: 571},
    {link: "https://google.com", code: "a7823", views: 71},
];

export function Home() {
    return (
        <Container>
            <Header />

            <FormContainer>
                <Input placeholder="Links que cabem no bolso"/>

                <MainButton text="Encurtar link"/>
            </FormContainer>

            <LinksContainer>
                {
                    mock.map((link) => {
                        return (
                            <LinkContainer key={link.code}>
                                <Link>
                                    {link.link}
                                </Link>

                                <Code>
                                    {link.code}
                                </Code>

                                <Views>
                                   Quantidade de visitantes: {link.views}
                                </Views>

                                <LinkDeleteButton> 
                                    <img src={TrashCanSVG} alt="trash can"/>
                                </LinkDeleteButton>
                            </LinkContainer>

                        )
                    })
                }
            </LinksContainer>
        </Container>
    )
}