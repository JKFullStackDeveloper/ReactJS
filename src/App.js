import React from 'react';
import './App.css';
import Products from './Components/Products';
import Header from './Components/Header';
import CategoryProvider from './Context/CategoryContext';
import ProductContextProvider from './Context/ProductContext';

function App() {

  return(
    <CategoryProvider>
      <div className='head-div'>
        <Header />
        <ProductContextProvider>
        <Products />
        </ProductContextProvider>
      </div>
    </CategoryProvider>
  );
}

export default App;
