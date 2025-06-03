import React from "react";

function BasicFigure({imgURL,caption}){
    return(
    <div>
        <img src={imgURL}></img>
        <p>{caption}</p>
    </div>
    )
}
export default BasicFigure;