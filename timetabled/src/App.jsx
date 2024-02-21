import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Calendar from './components/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Itinerary for 7 days in Chicago</h1>
      <h2>Welcome!!!!!!!!!!!!!!!!!!!</h2>
      <Calendar />
    </div>
  )
}

export default App
