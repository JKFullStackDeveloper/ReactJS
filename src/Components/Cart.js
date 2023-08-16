import React from "react";
import { useCartContext } from "../Context/CartContext";
import CartList from "./CartList";



export default function Cart(){

    const {items,cartOpen,setCartOpen,total} = useCartContext();
    if(cartOpen){
        return(
            <div className="cart-list">
                <div className="cart-head">
                <h3>Cart Item</h3>
                <button onClick={()=>{setCartOpen(false)}} className="close-cart">X</button>
                </div>
                <div className="cart-list-item">
                 {
                    Object.keys(items).map((productId)=>(
                        <CartList key={productId} product={items[productId]}/>
                    ))
                 }   
                </div>
                <div className="cartlist-footer">
                <h3>Total Cart Value : ${Math.round(total)} .00</h3>
                </div>
                <div className="cart-checkout">
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        )
    }else{
        return null;
    }
    
}