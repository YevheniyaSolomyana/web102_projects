import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const EditPlayer = ({ data }) => {
    const { id } = useParams();
    const [player, setPlayer] = useState({ name: "", element: "", weapon: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlayer((prev) => {
            return { ...prev, [name]: value }
        })
    }

    // UPDATE player
    const updatePlayer = async (event) => {
        event.preventDefault();

        await supabase
            .from('Players')
            .update({ name: player.name, element: player.element, weapon: player.weapon })
            .eq('id', id);

        window.location = "/";
    }

    // DELETE player
    const deletePlayer = async (event) => {
        event.preventDefault();

        await supabase
            .from('Players')
            .delete()
            .eq('id', id);

        window.location = "/";
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={player.name} placeholder="Enter name..." onChange={handleChange} /><br />
                <br />

                <label htmlFor="element">Element</label><br />
                <select id="element" name="element" value={player.element} onChange={handleChange}>
                    <option></option>
                    <option value="Anemo">Anemo</option>
                    <option value="Geo">Geo</option>
                    <option value="Electro">Electro</option>
                    <option value="Hydro">Hydro</option>
                    <option value="Pyro">Pyro</option>
                    <option value="Dendro">Dendro</option>
                    <option value="Cryo">Cryo</option>
                </select> <br />
                <br />

                <label htmlFor="weapon">Weapon</label><br />
                <div className="mini-container">
                    <ul>
                        <li><input type="checkbox" id="sword" name="weapon" value="Sword" onChange={handleChange} />Sword</li>
                        <li><input type="checkbox" id="claymore" name="weapon" value="Claymore" onChange={handleChange} />Claymore</li>
                        <li><input type="checkbox" id="polearm" name="weapon" value="Polearm" onChange={handleChange} />Polearm</li>
                        <li><input type="checkbox" id="catalyst" name="weapon" value="Catalyst" onChange={handleChange} />Catalyst</li>
                        <li><input type="checkbox" id="bow" name="weapon" value="Bow" onChange={handleChange} />Bow</li>
                    </ul>
                </div>
                <br />
                <button className="updateButton" onClick={updatePlayer}>Update</button>
                <button className="deleteButton" onClick={deletePlayer}>Delete</button>
            </form>
        </div>
    )
}

export default EditPlayer