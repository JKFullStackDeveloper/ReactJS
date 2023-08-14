import React from "react";
import AddtoCartButton from "./AddtoCartButton";

export default function ProductCard({ product }) {
    return (
        <div className="products">
            {product.title}
            <img loading="lazy" className="product-image" alt="product" src={product.image}></img>
            <footer className="product-footer">
            Price: {product.price} USD
            <AddtoCartButton product={product}/>
            </footer>
        </div>
    )
}