import logo from "../assets/logo.png";
import styled from "styled-components";

export default function WelcomeScreen({setStarted}) {
    return (
        <ContainerWelcome>
            <img src={logo} />
            <h1>ZapRecall</h1>
            <button data-test="start-btn" onClick={() => setStarted(true)}>Iniciar Recall!</button>
        </ContainerWelcome>
    )
}

const ContainerWelcome = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin: auto;
    img{
        width: 136px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin: 20px 0 50px 0;
    }
    button{
        color: #D70900;
        font-family: 'Recursive';
        font-size: 18px;
        background-color: #FFFFFF;
        border: 1px solid #D70900;
        border-radius: 5px;
        width: 246px;
        height: 54px;
        cursor: pointer;
        &:hover{
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            transform: translateY(-3px);
        }
        &:active{
            background-color: #FEDEDD;
            box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
            transform: translateY(1px);
        }
    }
`