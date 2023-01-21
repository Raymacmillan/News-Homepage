import React from "react";
import "./styles.css";
import imageDesk from "../Intro/image-web-3-desktop.jpg";
import imageMob from "../Intro/image-web-3-mobile.jpg";

function intro() {
    return <div className="mainContent">
        <picture>
            <source media="(min-width: 768px)" srcSet={imageDesk} />
            <img src={imageMob} className="introImg" alt="image-mobile"/>
        </picture> 
        <div className="intro">
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
        <p>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?
        </p>
        <button>Read More</button>
        </div>
        
        </div>
    </div>
}

export default intro;