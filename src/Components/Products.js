import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products(){
    
    const [products,setProducts]= useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    const fetchProducts = async ()=>{
        try{
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
        setIsLoading(false);
        } catch(e){
            console.log(e);
            setError(e);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[])
   
    if(isLoading){
        return(
            <div><i class=" spinner fa-solid fa-spinner"><span>Loading...</span></i></div>
        )
    }else if(error){
        return(
            <div><h2>Loading error... Please Refresh</h2> </div>
        )
    }else if(products.length>0){
        return(
            <div>
           <h2>Product Details</h2>
           <div className="product-head">
                {
                    products.map((product,index)=>(
                        <div className="products" key={index}>
                            {product.title}
                            <img loading="lazy" className="product-image" alt="product" src={product.image}></img>
                             Price: {product.price} USD
                        </div>
                    ))
                }
            </div>   
        </div>
        )
    }else{
        return(
            <h3>Product not found</h3>
        )
    }
}