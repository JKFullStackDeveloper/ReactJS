import React from 'react';
import './App.css';
import Products from './Components/Products';
import Header from './Components/Header';
import CategoryProvider from './Context/CategoryContext';
import ProductContextProvider from './Context/ProductContext';
import CartContextProvider from './Context/CartContext';
import Cart from './Components/Cart';

function App() {

  return(
    <CartContextProvider>
    <CategoryProvider>
      <div className='head-div'>
        <Header />
        <ProductContextProvider>
        <Products />
        </ProductContextProvider> 
        <Cart />
      </div>
       
    </CategoryProvider>
    </CartContextProvider>
  );
}

export default App;
