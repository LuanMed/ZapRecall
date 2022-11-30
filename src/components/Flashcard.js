import arrow from "../assets/seta_play.png"
import turn from "../assets/seta_virar.png"
import rigth from "../assets/icone_certo.png"
import almost from "../assets/icone_quase.png"
import wrong from "../assets/icone_erro.png"
import styled from "styled-components"
import { useState } from "react";

export default function Flashcard({ card, index, completedCounter, setCompletedCounter }) {
    const [CurrentClass, setCurrentClass] = useState(Question);
    const [text, setText] = useState(`Pergunta ${index + 1}`)
    const [clicked, setClicked] = useState([]);
    const [image, setImage] = useState(arrow);
    const [tagImg, setTagImg] = useState(<img src={arrow} alt="seta" onClick={() => openQuestion()} />)

    function openQuestion() {
        if (CurrentClass == Question) {
            setCurrentClass(OpenQuestion);
            setText(card.question);
            setTagImg(<img src={turn} alt="seta" onClick={() => reviewAnswer()} />);
        } else if (text == card.answer) {
            setCurrentClass(Question);
            setText(`Pergunta ${index + 1}`);
            setImage(arrow)
        }


        setCompletedCounter(completedCounter + 1);
    }

    function reviewAnswer() {
        setText(card.answer);
        setTagImg(
            <ConteinerButton>
                <RedButton onClick={redAnswer}>Não lembrei</RedButton>
                <YellowButton onClick={yellowAnswer}>Quase não lembrei</YellowButton>
                <GreenButton onClick={greenAnswer}>Zap!</GreenButton>
            </ConteinerButton>
        )
    }

    function redAnswer(){
        setText(`Pergunta ${index + 1}`);
        setTagImg(<img src={wrong} alt="wrong"/>)
        setCurrentClass(AnsweredR);
    }

    function yellowAnswer(){
        setText(`Pergunta ${index + 1}`);
        setTagImg(<img src={almost} alt="wrong"/>)
        setCurrentClass(AnsweredY);
    }

    function greenAnswer(){
        setText(`Pergunta ${index + 1}`);
        setTagImg(<img src={rigth} alt="wrong"/>)
        setCurrentClass(AnsweredG);
    }

    return (
        <CurrentClass key={index} >
            <p>{text}</p>
            {tagImg}
        </CurrentClass>
    )
}

const Question = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const OpenQuestion = styled.li`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }
`
const ConteinerButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        border: 0px solid;
        padding:5px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
  `

const RedButton = styled.button`
    background-color: #FF3030;
`
const YellowButton = styled.button`
    background-color: #FF922E;
`
const GreenButton = styled.button`
    background-color: #2FBE34;
`

const AnsweredR = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #FF3030;
        text-decoration: line-through
    }
`
const AnsweredY = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #FF922E;
        text-decoration: line-through
    }
`
const AnsweredG = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #2FBE34;
        text-decoration: line-through
    }
`