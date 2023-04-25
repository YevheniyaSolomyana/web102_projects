import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const EditPost = ({data}) => {
    const {id} = useParams();
    const [post, setPost] = useState({ title: "", description: "" });

    const handleAttributeChange = (attributeName) => {
        return (event) => {
            const { value } = event.target;
            setPost((prev) => {
                return {
                    ...prev,
                    [attributeName]: value
                };
            });
        };
    };

    // UPDATE post
    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Posts')
        .update({ title: post.title, description: post.description})
        .eq('id', id);

        window.location = "/";
    }

    // DELETE post
    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('Posts')
        .delete()
        .eq('id', id);

        window.location = "/";
    }


    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleAttributeChange('title')} /><br />
                <br />

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleAttributeChange('description')}>
                </textarea>
                <br />
                <input type="submit" value="Submit" onClick={updatePost} />
                {/* <button className="deleteButton" onClick={deletePost}>Delete</button> */}
            </form>
        </div>
    )
}

export default EditPost