import React, { useState } from 'react';
import { supabase } from '../client'

const CreatePlayer = () => {
    const [player, setPlayer] = useState({name:"", element:"", weapon:""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPlayer((prev) => {
            return {...prev, [name]:value}
        })
    }

    const createPlayer = async (event) => {
        event.preventDefault();

        const { error } = await supabase
        .from('Players')
        .insert({ name: player.name, element: player.element, weapon: player.weapon })
        .select();

        if (error) {
            console.log(error);
        }
        window.location = "/";
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={player.name} placeholder="Enter name..." onChange={handleChange}/><br />
                <br/>

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
                <button className="createButton" onClick={createPlayer}>Submit</button>
            </form>
        </div>
    )
}

export default CreatePlayer