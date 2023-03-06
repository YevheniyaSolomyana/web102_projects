import React, { useState } from "react";

const Flashcards = ({cards}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };
    
    const handleNextCard = () => {
        const nextCard = Math.floor(Math.random() * cards.length);
        setCurrentCard(nextCard);
        setShowAnswer(false);
    };

    return (
        <div className="flashcard-container">
            <div className="flashcard" onClick={handleShowAnswer}>
                <h3>{showAnswer ? cards[currentCard].answer : cards[currentCard].question}</h3>
            </div>
            <button onClick={handleNextCard}>Next Card</button>
        </div>
    )
}

export default Flashcards;