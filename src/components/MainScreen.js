import Header from "./Header";
import Footer from "./Footer";
import Deck from "./Deck";
import cards from "../cards";
import { useState } from "react";

export default function MainScreen() {
    const completedArray = [];
    const [completedCounter, setCompletedCounter] = useState(completedArray.length);
    return (
        <>
            <Header />
            <Deck cards={cards} completedCounter={completedCounter} setCompletedCounter={setCompletedCounter} completedArray={completedArray} />
            <Footer completedCounter={completedCounter} cards={cards} />
        </>
    )
}