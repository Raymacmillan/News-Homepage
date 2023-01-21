import React from "react";
import "./styles.css";

function furtherInfo() {
    return <div className="infoCont">
        <h1>New</h1>
        <div className="subInfo">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <div className="line"></div>
        </div>
        <div className="subInfo">
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
            <div className="line"></div>
        </div>
        <div className="subInfo">
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
    </div>
}

export default furtherInfo;