import React, { useState, useEffect } from 'react';
import { typography } from '@material-ui/system';
import commentPic from '../../commentPic/commentPic';
import Images from '../Images/Images';
import './Comment.css'
const Comments = (props) => {
    
    const [commentPicture,setcourses] = useState(commentPic);

    const{name,email,body,postId} = props.comment;
    const commentStyle ={
        border:"1px solid #95a5a6",
        padding:"10px 30px",
        margin: "20px 0",
    }


    return (
        <div style={commentStyle} className="comment-box">
            
            <div>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Body : {body}</p>
                <p>PostId : {postId}</p>
            </div>
            <div>
                {
                    commentPicture.map(cp =><Images cp={cp}></Images>)
                }
            </div>



        </div>
    );
};

export default Comments;