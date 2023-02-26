import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
            <img src={props.img}/>
            <a href={props.link}>
                <button>Take me there!</button>
            </a>
        </div>
    )
}

export default Card;