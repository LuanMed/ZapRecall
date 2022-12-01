import Flashcard from "./Flashcard";

export default function Deck({ cards, setCompletedCounter, completedArray, setAnswerRow, answerRow, auxAnswer, setIncludesWrong}) {

    return (
        <ul>
            {cards.map((card, index) => (
                <Flashcard 
                    key={index} card={card} index={index} setAnswerRow={setAnswerRow}
                    answerRow={answerRow} completedArray={completedArray} auxAnswer={auxAnswer}
                    setCompletedCounter={setCompletedCounter} setIncludesWrong={setIncludesWrong}
                />))}
        </ul>
    )
}