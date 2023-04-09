import { useEffect, useState } from "react"
import CardPlayer from "../components/CardPlayer"

const ReadPlayers = (props) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        setPlayers(props.data)
    }, [props])

    return (
        <div className="ReadPlayers">
            {
                players && players.length > 0 ?
                players.map((player) => 
                    <CardPlayer id={player.id} name={player.name} element={player.element} weapon={player.weapon}/>
                ) : <h2>No players yet!</h2>
            }
        </div>
    )
}

export default ReadPlayers