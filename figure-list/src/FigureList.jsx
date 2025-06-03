import React, { useState } from "react";
import BasicFigure from "./BasicFigure";

function FigureList (){
    const [figures,setFigures]=useState([
        {imgURL:"https://picsum.photos/400",caption:"Rando Image"},
        {imgURL:"https://picsum.photos/400",caption:"Rando Image"},
        {imgURL:"https://picsum.photos/400",caption:"Rando Image"},
        {imgURL:"https://picsum.photos/400",caption:"Rando Image"},
    ]);

    const addFigure=()=>{
        
        setFigures([...figures,{imgURL:"https://picsum.photos/400",caption:"Rando Image"}])
    }
    const delFigure=()=>{
        setFigures(figures.slice(0,-1));
    }

    return (
        <div className="main">
            <button onClick={addFigure}>addFigure</button>
            <button onClick={delFigure}>delFigure</button>
            {figures.map((figure,index)=>(
                <BasicFigure key={index} imgURL={figure.imgURL} caption={figure.caption}/>
            ))}
        </div>
    );
}

export default FigureList;