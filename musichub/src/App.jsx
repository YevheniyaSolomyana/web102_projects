import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import { supabase } from './client'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './components/PostDetails'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // READ all posts from table
    const fetchPosts = async () => {
      const { data } = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: true })


      // set state of players
      setPosts(data);
    }
    fetchPosts(); 
  }, [])


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/details/:id",
      element: <PostDetails data={posts} />
    },
    {
      path:"/create",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Welcome to the MusicHub!</h1>
        <Link to="/"><button className="headerBtn"> Home  </button></Link>
        <Link to="/create"><button className="headerBtn"> Share Your Music! </button></Link>
      </div>
        {element}
    </div>
  )
}

export default App