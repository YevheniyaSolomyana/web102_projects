import React, { useState } from "react";

const Flashcards = ({cards}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [checkAnswer, setCheckAnswer] = useState('');

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const handleCheckAnswer = () => {
        const isCorrect = cards[currentCard].answer === userInput.trim();
        setCheckAnswer(isCorrect ? "correct" : "wrong");
    };
    
    const handleNextCard = () => {
        // const nextCard = Math.floor(Math.random() * cards.length);
        const nextCard = currentCard + 1;
        if (nextCard < cards.length) {
            setCurrentCard(nextCard);
            setShowAnswer(false);
            setCheckAnswer('');
            setUserInput('');
        }
    };

    const handleGoBack = () => {
        const previousCard = currentCard - 1;
        if (previousCard >= 0) {
            setCurrentCard(previousCard);
            setShowAnswer(false);
            setCheckAnswer('');
            setUserInput('');
        }
    }

    const handleShuffleCards = () => {
        const nextShuffledCard = Math.floor(Math.random() * cards.length);
        setCurrentCard(nextShuffledCard);
        setShowAnswer(false);
        setCheckAnswer('');
        setUserInput('');
    }

    return (
        <div className="flashcard-container">
            <button onClick={handleShuffleCards}>🔁</button>
            <div className="flashcard" onClick={handleShowAnswer}>
                <h3>{showAnswer ? cards[currentCard].answer : cards[currentCard].question}</h3>
            </div>
            <div className="guessing">
                <input
                    type="text"
                    placeholder="Type in your answer..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    className={checkAnswer}
                />
                <button className="submit-btn" onClick={handleCheckAnswer}>check!</button>
            </div>
            <div className="arrows">
                <button className="go-back" onClick={handleGoBack}>⬅️</button>
                <button onClick={handleNextCard}>➡️</button>
            </div>
        </div>
    )
}

export default Flashcards;