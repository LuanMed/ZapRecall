import Header from "./Header";
import Footer from "./Footer";
import Deck from "./Deck";
import cards from "../cards";
import { useState } from "react";

export default function MainScreen() {
    const completedArray = [];
    const [completedCounter, setCompletedCounter] = useState(completedArray.length);
    const auxAnswer = []
    const [answerRow, setAnswerRow] = useState(auxAnswer);
    return (
        <>
            <Header />
            <Deck
                cards={cards} completedCounter={completedCounter} auxAnswer={auxAnswer}
                setCompletedCounter={setCompletedCounter} completedArray={completedArray} setAnswerRow={setAnswerRow} answerRow={answerRow}
            />
            <Footer completedCounter={completedCounter} cards={cards} answerRow={answerRow} />
        </>
    )
}