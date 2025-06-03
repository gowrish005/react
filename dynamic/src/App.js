import './App.css';
import { useState } from 'react';

function App() {
  const [text,setText] = useState('');
  const update = (event) => {
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type='text' onChange={update}></input>
      <br></br>
      <a>{text}</a>
    </div>
  );
}

export default App;
