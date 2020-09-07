import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { typography } from '@material-ui/system';
import './Post.css';
const Post = (props) => {
    const {title,id} = props.post;

    const postStyle = {
        border: "1px solid #95a5a6",
        padding : "20px",
        marginBottom : "30px",
    }


    return (
        <div style={postStyle}>
            <h3>Title : {title}</h3>
            <h3>Id : {id}</h3>
            <Link to={`/post/${id}`}><Button variant="contained" color="primary">See More <span class="material-icons">
keyboard_arrow_right
</span></Button></Link>
        </div>
    );
};

export default Post;