import React, { useState } from "react";
import './App.css';
import Nav  from "./Components/Nav";
import Intro from "./Components/Intro";
import FurtherInfo from "./Components/futherInfo";
import Pimages from "./Components/pimages";
import PimageData from "./Components/data/pimage";

function App() {
  const[pimageData,setPimageData] = useState(PimageData);

  return <div>
    <Nav />
    <div className="container">
    <Intro />
    <FurtherInfo />

<div className="pimages">
    {pimageData&&
    pimageData.map(({id,image,number,topic,info}) => 
    <Pimages key={id} id={id} image={image} number={number} topic={topic} info={info} />
    ) 
    }
    </div>
  </div>
  </div>
}

export default App;

