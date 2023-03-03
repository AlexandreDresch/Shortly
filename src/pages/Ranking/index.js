import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import { Header } from "../../components/Header";

import { api } from "../../services/api";

import { UserContext } from "../../context/UserContext";

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

export function Ranking() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { userData } = useContext(UserContext);

  async function getRanking() {
    try {
      const urlsData = await api.get("/ranking");

      setRanking(urlsData.data);
      setIsLoading(false);
    } catch (error) {
      alert("Erro ao pegar ranking, tente novamente");
    }
  }

  useEffect(() => {
    getRanking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData.token !== undefined) {
      setIsLoggedIn(true);
    }
  }, [userData]);
  return (
    <Container>
      <Header />

      <TitleContainer>
        <TitleImage src={RankingSVG} />
        <TitleText>Ranking</TitleText>
      </TitleContainer>

      <RankingContainer>
        {isLoading ? (
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#5D9040"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <div>
            {ranking.length === 0 && (
              <RankingText>
                Nosso ranking está vazio, seja o primeiro a fazer parte dele :)
              </RankingText>
            )}
            {ranking.map((user, index) => {
              return (
                <RankingText key={user.name + index}>
                  <RankingName>
                    {index + 1}. {user.name}{" "}
                  </RankingName>
                  - {user.linksCount} links -{" "}
                  {user.visitCount !== null ? user.visitCount : 0} visualizações
                </RankingText>
              );
            })}
          </div>
        )}
      </RankingContainer>

      {!isLoggedIn && (
        <TitleText>Crie sua conta para usar nosso serviço!</TitleText>
      )}
    </Container>
  );
}
