import React from "react";
import { useCartContext } from "../Context/CartContext";


export default function Cart(){

    const {items,cartOpen,setCartOpen} = useCartContext();
    // console.log({items})
    if(cartOpen){
        return(
            <div className="cart-list">
                <div className="cart-head">
                <h3>Cart Item</h3>
                <button onClick={()=>{setCartOpen(false)}} className="close-cart">X</button>
                </div>
                <div className="cart-list-item">
                
                </div>
            </div>
        )
    }else{
        return null;
    }
    
}