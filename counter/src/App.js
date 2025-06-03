import { useState } from "react";
import React from "react";

function App() {
  const [value,setVaule] = useState(0);
  const [step,setStep] = useState(1);

  const ince=()=>{
    setVaule(prevVaule=>prevVaule+step);
  };
  const decr=()=>{
    setVaule(prevVaule=>prevVaule-step);
  };
  const reset=()=>{
    setVaule(0);
  };
  const updateStep=(event)=>{
    setStep(Number(event.target.value))
  };

  return (
    <div className="App">
      <button onClick={ince}>ince</button>
      <button onClick={decr}>dec</button>
      <button onClick={reset}>reset</button>
      <br></br>
      <input type="number" vaule="{step}" min="1" onChange={updateStep}></input>
      <br></br>
      {value} 
    </div>
  );
}

export default App;
