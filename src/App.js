import React from 'react';
import './App.css';
import Products from './Components/Products';
import Header from './Components/Header';

function App(props) {

  return(
    <div className='head-div'>
    <Header />
    <Products />
  </div>
  );
}

export default App;
