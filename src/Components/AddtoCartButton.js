import React, { useCallback } from "react";
import { useCartContext } from "../Context/CartContext";

export default function AddtoCartButton({product}){
    const {items,addItem,removeItem} = useCartContext();

    const incrementProduct = useCallback(()=>{
        addItem(product);    
    },[addItem,product])

    const decrementProduct = useCallback(()=>{
        removeItem(product)
    },[removeItem,product])
    
    if(items[product.id]){
        return(
            <div className="product-counter">
                <button onClick={decrementProduct} className="product-add-button">-</button>
                <div className="product-count-lable">
                    {items[product.id].quantity}
                </div>
                <button onClick={incrementProduct} className="product-add-button">+</button>
            </div>
        );    
    }else{
        return(
            <button className="product-add-button" onClick={incrementProduct}>Add to Cart</button>
        );
    }      
} 