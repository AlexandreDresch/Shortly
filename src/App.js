import styled from "styled-components";

import { GlobalStyle } from "./global/styles";

import Routes from "./routes/routes";

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 60px 210px;
`;
