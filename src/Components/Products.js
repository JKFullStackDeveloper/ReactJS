import React, { useEffect, useState } from "react";

export default function Products(){
    
    const [products,setProducts]= useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const fetchProducts = async ()=>{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchProducts();
    },[products])
   
    return(
        <div>
           <h2>Product Details</h2>
           {isLoading?"Loading....":null}
           <div className="product-head">
                {
                    products.map((product,index)=>(
                        <div className="products" key={index}>
                            {product.title}
                            <img loading="lazy" className="product-image" alt="product-image" src={product.image}></img>
                             Price: {product.price} USD
                        </div>
                    ))
                }
            </div>   
        </div>

    )
}

