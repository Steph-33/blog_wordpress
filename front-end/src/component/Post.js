import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Post (){
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
        const result = await axios(
            `/wp-json/wp/V2/posts/${id}`,
        );
            
        setPost(result.data);
        setTitle(result.data.title.rendered);
        setContent(result.data.content.rendered);
        console.log('Post', post);

        };

        fetchData();
    }, [post,id]);

    return (
        <div>
            <>
                <h3>{title}</h3>
                <h5 dangerouslySetInnerHTML = {{__html: content}}/>
            </>
        </div>
    )

}
