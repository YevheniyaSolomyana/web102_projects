import './App.css'
import Flashcards from './components/Flashcards';
import CARDS_DATA from './cardsArray.jsx';


function App() {

  return (
    <div className="App">
      <h2>Computer Science Jokes</h2>
      <p>Let's see if you can answer a question before flipping the card. Enjoy!</p>
      <p>Number of cards: 5</p>
      <div>
        <Flashcards cards={CARDS_DATA} />
      </div>
    </div>
  )
}

export default App