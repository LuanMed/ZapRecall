import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Deck from "./components/Deck";
import cards from "./cards";


export default function App() {
  return (
    <ConteinerApp>
      <GlobalStyle />
      <Header />
      <Deck cards={cards}/>
      <Footer />
    </ConteinerApp>
  );
}

const ConteinerApp = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`