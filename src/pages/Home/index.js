import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { MainButton } from "../../components/MainButton";

import { api } from "../../services/api";

import { UserContext } from "../../context/UserContext";

import {
  Code,
  Container,
  FormContainer,
  Link,
  LinkContainer,
  LinkDeleteButton,
  LinksContainer,
  Views,
} from "./styles";

import TrashCanSVG from "../../assets/trash.svg";
import { ThreeDots } from "react-loader-spinner";

export function Home() {
  const { userData } = useContext(UserContext);

  const [userUrls, setUserUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  async function getUserUrls() {
    try {
      const userUrls = await api.get("/users/me", {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
      console.log(userUrls);
      setUserUrls(userUrls.data.shortenedUrls);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateUrl() {
    console.log(url);
    setIsLoadingButton(true);
    try {
      await api.post(
        "/urls/shorten",
        {
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );

      setIsLoadingButton(false);
      getUserUrls();
    } catch (error) {
      console.log(error);
      setIsLoadingButton(false);
    }
  }

  async function handleDeleteUrl(id) {
    try {
      await api.delete(`/urls/${id}`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />

      <FormContainer>
        <Input
          placeholder="Links que cabem no bolso"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isLoadingButton}
          type={"text"}
        />

        <MainButton
          text="Encurtar link"
          disabled={isLoadingButton}
          onClick={handleCreateUrl}
        />
      </FormContainer>

      {isLoading ? (
        <LinksContainer>
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
        </LinksContainer>
      ) : (
        <LinksContainer>
          {userUrls !== undefined &&
            userUrls.map((link) => {
              return (
                <LinkContainer key={link.id}>
                  <Link>{link.url}</Link>

                  <Code>{link.shortUrl}</Code>

                  <Views>Quantidade de visitantes: {link.visitCount}</Views>

                  <LinkDeleteButton onClick={() => handleDeleteUrl(link.id)}>
                    <img src={TrashCanSVG} alt="trash can" />
                  </LinkDeleteButton>
                </LinkContainer>
              );
            })}
        </LinksContainer>
      )}
    </Container>
  );
}
