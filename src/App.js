import React, { useState } from 'react';
import './App.css';
import Products from './Components/Products';
import Header from './Components/Header';

function App(props) {

  const [selectedCategory,setSelectedCategory] = useState([]);

  return(
    <div className='head-div'>
    <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    <Products selectedCategory={selectedCategory} />
  </div>
  );
}

export default App;
