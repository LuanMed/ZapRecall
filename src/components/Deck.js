import Flashcard from "./Flashcard";

export default function Deck({ cards, completedCounter, setCompletedCounter, completedArray }) {

    return (
        <ul>
            {cards.map((card, index) => (
                <Flashcard 
                    key={index} card={card} index={index}
                    completedCounter={completedCounter} completedArray={completedArray}
                    setCompletedCounter={setCompletedCounter}
                />))}
        </ul>
    )
}