import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <p>There is nothing here!</p>
            <Link to="/"> Back to Home </Link>
        </div>
    )
}

export default NotFound;