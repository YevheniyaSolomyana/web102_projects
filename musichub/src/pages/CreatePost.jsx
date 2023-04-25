import React, { useState } from 'react';
import { supabase } from '../client'

const CreatePost = () => {
    const [post, setPost] = useState({title:"", description:"" });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost((prev) => {
            return {...prev, [name]:value}
        })
    }

    const createPost = async (event) => {
        event.preventDefault();

        const { error } = await supabase
        .from('Posts')
        .insert({ title: post.title, description: post.description })
        .select();

        if (error) {
            console.log(error);
        }
        window.location = "/";
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input placeholder="Title" type="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea placeholder="(Optional)" rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange}>
                </textarea>
                <br/>
                <button onClick={createPost}>Create Post</button>
                {/* <input type="submit" value="Submit" onClick={createPost}/> */}
            </form>
        </div>
    )
}

export default CreatePost