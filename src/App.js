import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Products from './Components/Products';

function App(props) {
  return(
    <div className='head-div'>
    <h1 className='first-h1'>My Shopping Cart</h1>
    <Products />
  </div>
  
  );
}

export default App;
