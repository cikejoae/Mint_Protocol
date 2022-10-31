import React, { useState } from "react";
import images from "./images";


function ga(){

    const [selectedImg, setSelectedImg]=useState(images[0]);

    return(
<div>

    <div className="container">

        <img src={selectedImg} alt="Select" className="selected"></img>

        <div >
        </div>
    </div>



</div>

    )

}

export {ga}
