import React from "react";
import AddtoCartButton from "./AddtoCartButton";

function CartList({ product }) {
    return (
        <div className="cart-item">
            <div className="image-title-grp">
                <div className="cart-item-image">
                    <img src={product.image} alt="product"></img>
                </div>
                <div className="cart-item-title">
                    {product.title}
                </div>
            </div>
            <div className="cart-item-price">
              <h4>  Price : ${product.price} </h4>
              <h4>Total : $ {(product.price * product.quantity).toFixed(2)} </h4>
            </div>
            <AddtoCartButton product={product} />
        </div>
    )
}

export default CartList;