import arrow from "../assets/seta_play.png"
import turn from "../assets/seta_virar.png"
import right from "../assets/icone_certo.png"
import almost from "../assets/icone_quase.png"
import wrong from "../assets/icone_erro.png"
import styled from "styled-components"
import { useState } from "react";

export default function Flashcard({ card, index, setCompletedCounter, completedArray, setAnswerRow, answerRow, auxAnswer, setIncludesWrong}) {
    const [CurrentClass, setCurrentClass] = useState(Question);
    const [text, setText] = useState(`Pergunta ${index + 1}`);
    const [tagImg, setTagImg] = useState(<img src={arrow} alt="seta" data-test="play-btn" onClick={() => openQuestion()} />);
    const [textColor, setTextColor] = useState("#333333");
    const [decoration, setDecoration] = useState('none');
    let aux = [...answerRow];

    function openQuestion() {
        setCurrentClass(OpenQuestion);
        setText(card.question);
        setTagImg(<img src={turn} alt="seta" data-test="turn-btn" onClick={() => reviewAnswer()} />);
    }

    function reviewAnswer() {
        setText(card.answer);
        setTagImg(
            <ConteinerButton>
                <RedButton data-test="no-btn" onClick={redAnswer}>Não lembrei</RedButton>
                <YellowButton data-test="partial-btn" onClick={yellowAnswer}>Quase não lembrei</YellowButton>
                <GreenButton data-test="zap-btn" onClick={greenAnswer}>Zap!</GreenButton>
            </ConteinerButton>
        )
    }

    function redAnswer() {
        setText(`Pergunta ${index + 1}`);
        setTagImg(<img data-test="no-icon" src={wrong} alt="wrong" />)
        setCurrentClass(Question);
        setTextColor("#FF3030");
        setDecoration("line-through");
        completedArray.push("done");
        setCompletedCounter(completedArray.length);
        auxAnswer.push(<img key={index} src={wrong}/>)
        setAnswerRow(auxAnswer);
        setIncludesWrong(true);
    }

    function yellowAnswer() {
        setText(`Pergunta ${index + 1}`);
        setTagImg(<img data-test="partial-icon" src={almost} alt="almost" />)
        setCurrentClass(Question);
        setTextColor("#FF922E");
        setDecoration("line-through");
        completedArray.push("done");
        setCompletedCounter(completedArray.length);
        auxAnswer.push(<img key={index} src={almost}/>)
        setAnswerRow(auxAnswer);
    }

    function greenAnswer() {
        setText(`Pergunta ${index + 1}`);
        setTagImg(<img data-test="zap-icon" src={right} alt="right" />)
        setCurrentClass(Question);
        setTextColor("#2FBE34");
        setDecoration("line-through");
        completedArray.push("done");
        setCompletedCounter(completedArray.length);
        auxAnswer.push(<img key={index} src={right}/>)
        setAnswerRow(auxAnswer);
    }

    return (
        <CurrentClass data-test="flashcard" textColor={textColor} decoration={decoration}>
            <p data-test="flashcard-text">{text}</p>
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
        color: ${props => props.textColor};
        text-decoration: ${props => props.decoration};
    }
    img{
        cursor: pointer;
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
        opacity: 95%;
        cursor: pointer;
        &:hover{
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            transform: translateY(-3px);
            opacity: 100%;
        }
        &:active{
            box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
            transform: translateY(1px);
        }
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