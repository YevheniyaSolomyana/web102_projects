import { useEffect, useState } from "react"
import Post from "../components/Post"

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(props.data)
    }, [props])

    return (
        <div className="ReadPlayers">
            {
                posts && posts.length > 0 ?
                posts.map((post) => 
                    <Post id={post.id} title={post.title} created_at={post.created_at} upvoteCount={post.upvoteCount}/>
                ) : <h2>No posts yet!</h2>
            }
        </div>
    )
}

export default ReadPosts