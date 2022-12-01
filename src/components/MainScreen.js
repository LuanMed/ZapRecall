import Header from "./Header";
import Footer from "./Footer";
import Deck from "./Deck";
import cards from "../cards";
import { useState } from "react";

export default function MainScreen() {
    const completedArray = [];
    const [completedCounter, setCompletedCounter] = useState(completedArray.length);
    const auxAnswer = [];
    const [answerRow, setAnswerRow] = useState(auxAnswer);
    const [includesWrong, setIncludesWrong] = useState(false);

    return (
        <>
            <Header />
            <Deck
                cards={cards} auxAnswer={auxAnswer} setIncludesWrong={setIncludesWrong}
                setCompletedCounter={setCompletedCounter} completedArray={completedArray} setAnswerRow={setAnswerRow} answerRow={answerRow}
            />
            <Footer completedCounter={completedCounter} cards={cards} answerRow={answerRow} includesWrong={includesWrong}/>
        </>
    )
}