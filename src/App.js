import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Products from './Components/Products';
import Cart from './Components/Cart';
import UserData from './Components/UserData';

function App(props) {
  return(
    <div className='head-div'>
    <h1 className='first-h1'>Customer List</h1>
    <UserData />
  </div>
  
  );
}

export default App;
