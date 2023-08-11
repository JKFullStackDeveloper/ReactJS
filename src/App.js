import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Products from './Components/Products';
import Cart from './Components/Cart';
import UserData from './Components/UserData';
import Header from './Components/Header';

function App(props) {
  return(
    <div className='head-div'>
    <Header/>
    <Products />
    
  </div>
  
  );
}

export default App;
