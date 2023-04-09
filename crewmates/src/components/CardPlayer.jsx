import { Link } from 'react-router-dom'

const CardPlayer = (props) => {

    return (
        <div className={`Card ${props.element}`}>
            <h2 className="name">Name of Player: {props.name}</h2>
            <h3 className="element">Element of Player: {props.element}</h3>
            <h3 className="weapon">Weapon of Player: {props.weapon}</h3>
            <Link to={'edit/' + props.id}><button>Edit Player</button></Link>
        </div>
    );
}

export default CardPlayer