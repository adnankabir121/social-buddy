import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { Container } from '@material-ui/core';


const PostDetail = () => {

    //Styles
    const postStyle = {
        marginTop:"30px",
        marginBottom:"60px"
    };

    const {postId} = useParams();
    const[post,setPost] = useState({});
    const[comments,setComments] = useState([]);
    const {title,body,id,userId} = post;
    
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    },[]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data => setComments(data))
    },[]);
    
    return (
        <div>
            <Container fixed>
                <div style={postStyle}>
                    <h1>Post :</h1>
                    <p>Title : {title}</p>
                    <p>Id : {id}</p>
                    <p>User Id : {userId}</p>
                    <p>Body : {body}</p>
                    
                </div>
                
                <h1>Comments : {comments.length}</h1>
                {
                    comments.map(comment=><Comments comment={comment}></Comments>)  
                }
                
            </Container>
  

        </div>
    );
};

export default PostDetail;