import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Deck from "./components/Deck";
import cards from "./cards";
import { useState } from "react";


export default function App() {
  const completedArray = [];
  const [completedCounter, setCompletedCounter] = useState(completedArray.length);
  
  return (
    <ConteinerApp>
      <GlobalStyle />
      <Header />
      <Deck cards={cards} completedCounter={completedCounter} setCompletedCounter={setCompletedCounter} completedArray={completedArray}/>
      <Footer completedCounter={completedCounter} cards={cards}/>
    </ConteinerApp>
  );
}

const ConteinerApp = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 75px;
`