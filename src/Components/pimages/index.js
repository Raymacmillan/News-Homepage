import React from "react";
import "./styles.css";
import App from "../../App";

function pimages ({id,image,number,topic,info}) {
    return <div className="pimageCont">
        <div className="pimage" id={id}>
            <img src={image} alt="pimage"/>
            <div className="explanation">
            <h1>{number}</h1>
            <h2>{topic}</h2>
            <p>{info}</p>
            </div>
        </div>
    </div>
}

export default pimages;