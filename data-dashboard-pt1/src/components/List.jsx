const List = ({ name, street, city, state, type }) => {
    return (
        <div>
            <div className="container-box">
                <p>{name}</p>
                <p>{street}, {city}, {state}</p>
                <p>Type: {type}</p>
            </div>
        </div>
    )
}

export default List;