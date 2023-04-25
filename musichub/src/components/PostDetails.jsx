import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const PostDetails = ({data}) => {
    const { id } = useParams();
    const [count, setCount] = useState(0);

    const updateCount = async (event) => {
        // Update in Supabase
        await supabase
            .from('Posts')
            .update({ upvoteCount: count + 1 })
            .eq('id', id)

        // Update State Variable
        setCount((count) => count + 1);
    }

    // DELETE post
    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        window.location = "/";
    }

    return (
        <div>
            <p>Posted {data.created_at}</p>
            <h2>{data.title}</h2>
            <h3>{data.description}</h3>
            <button onClick={updateCount}>{count} likes</button>
            <Link to={'edit/' + data.id}><button>Edit Post</button></Link>
            <button className="deleteButton" onClick={deletePost}>Delete Post</button>
            {/* <Link to={'detais' + props.id}><button>See More</button></Link> */}
        </div>
    )
}

export default PostDetails