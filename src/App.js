import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Products from './Components/Products';
import Cart from './Components/Cart';

function App(props) {
  return(
    <div className='head-div'>
    <h1 className='first-h1'>My Shopping Cart</h1>
    <Cart />
  </div>
  
  );
}

export default App;
