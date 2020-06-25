import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/wp-json/wp/v2/posts'
      );
      
      setPosts(result.data);
    };
 
    fetchData();
  }, []);
  
  return (
    
    <div>
      {posts.map(post =>(
        <>
          <Link to={`/posts/${post.id}`}><h3> { post.title.rendered } </h3></Link>
          <h5 dangerouslySetInnerHTML = {{__html: post.content.rendered}}/>
        </>
      ))}    
      
    </div>
  );       
}