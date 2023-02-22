import { Header } from "../../components/Header";

import {
  Container,
  RankingContainer,
  RankingName,
  RankingText,
  TitleContainer,
  TitleImage,
  TitleText,
} from "./styles.js";

import RankingSVG from "../../assets/ranking.svg";

let mock = [
  { name: "Fulaninha", qty: 32, views: 1703584 },
  { name: "Ciclano", qty: 20, views: 1103334 },
  { name: "José", qty: 18, views: 703584 },
  { name: "Maria", qty: 14, views: 1703584 },
  { name: "BOT", qty: 123456, views: 53584 },
];

export function Ranking() {
  return (
    <Container>
      <Header />

      <TitleContainer>
        <TitleImage src={RankingSVG} />
        <TitleText>Ranking</TitleText>
      </TitleContainer>

      <RankingContainer>
        <div>
          {mock.map((user, index) => {
            return (
              <RankingText key={user.name+index}>
                <RankingName>
                  {index + 1}. {user.name}{" "}
                </RankingName>
                - {user.qty} links - {user.views} visualizações
              </RankingText>
            );
          })}
        </div>
      </RankingContainer>

      {
        true &&
        <TitleText>
          Crie sua conta para usar nosso serviço!
      </TitleText>
      }
    </Container>
  );
}
