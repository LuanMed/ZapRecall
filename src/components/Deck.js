import { useState } from "react";
import styled from "styled-components";
import Flashcard from "./Flashcard";

export default function Deck({ cards, completedCounter, setCompletedCounter }) {
    

    return (
        <ul>
            {cards.map((card, index) => (<Flashcard key={index}card={card} index={index} completedCounter={completedCounter} setCompletedCounter={setCompletedCounter}/>))}
        </ul>
    )
}