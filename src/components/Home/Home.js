import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Container } from '@material-ui/core';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
      },[]);
    
    return (
        <div>
            <Container fixed>
                <h1>All Posts : {posts.length}</h1>
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </Container>

        </div>
    );
};

export default Home;