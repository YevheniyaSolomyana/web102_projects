import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <div>
            <p>Posted {props.created_at}</p>
            <h2>{props.title}</h2>
            <p>{props.upvoteCount} likes</p>
            <Link to={'details/' + props.id}><button>See More</button></Link>
        </div>
    )
}

export default Post