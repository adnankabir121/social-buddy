import React, { useState } from 'react';
import './Images.css'
const Images = (props) => {

    console.log(props);
    return (
        <div className="round-border">
            <img src={props.cp.img} alt=""/>
        </div>
    );
};

export default Images;