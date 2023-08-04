import React from 'react';
import './App.css';
import Counter from './Components/Counter';

function App(props) {
  return(
    <div className='head-div'>
    <h1 className='first-h1'>Counter App</h1>
    <Counter title="Value"/>
  </div>
  
  );
}

export default App;
