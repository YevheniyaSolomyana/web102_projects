import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import { supabase } from './client'
import EditPlayer from './pages/EditPlayer'
import CreatePlayer from './pages/CreatePlayer'
import ReadPlayers from './pages/ReadPlayers'

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    // READ all players from table
    const fetchPlayers = async () => {
      const { data } = await supabase
        .from('Players')
        .select()
        .order('created_at', { ascending: true })


      // set state of players
      setPlayers(data);
    }
    fetchPlayers(); 
  }, [])


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPlayers data={players}/>
    },
    {
      path:"/edit/:id",
      element: <EditPlayer data={players} />
    },
    {
      path:"/create",
      element: <CreatePlayer />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Welcome to the World of Players!</h1>
        <Link to="/"><button className="headerBtn"> Home  </button></Link>
        <Link to="/create"><button className="headerBtn"> Create a Player </button></Link>
      </div>
        {element}
    </div>
  )
}

export default App
