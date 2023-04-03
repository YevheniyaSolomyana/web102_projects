import { Link } from "react-router-dom";

const List = ({ id, name, street, city, state, type }) => {
    return (
        <div>
            <div className="container-box">
                <Link to={`/BreweryDetails/${id}`} key={id}>
                    <p>{name}</p>
                </Link>
                <p>{street}, {city}, {state}</p>
                <p>Type: {type}</p>
            </div>
        </div>
    )
}

export default List;