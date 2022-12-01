import styled from "styled-components";
import { useState } from "react";
import MainScreen from "./components/MainScreen";
import WelcomeScreen from "./components/WelcomeScreen";


export default function App() {
  const [started, setStarted] = useState(false);
  
  return (
    <ConteinerApp>
      {started ? <MainScreen/> : <WelcomeScreen setStarted={setStarted}/>}
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
  padding-bottom: 75px;
`