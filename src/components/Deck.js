import Flashcard from "./Flashcard";

export default function Deck({ cards, completedCounter, setCompletedCounter, completedArray, setAnswerRow, answerRow, auxAnswer  }) {

    return (
        <ul>
            {cards.map((card, index) => (
                <Flashcard 
                    key={index} card={card} index={index} setAnswerRow={setAnswerRow} answerRow={answerRow}
                    completedCounter={completedCounter} completedArray={completedArray} auxAnswer={auxAnswer}
                    setCompletedCounter={setCompletedCounter}
                />))}
        </ul>
    )
}