import React, { useEffect, useState } from 'react';

export default function Cart(){
    
    const [cartProduct,setCartProduct] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const fetchData = async ()=>{
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setCartProduct(data.products);
        setIsLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[cartProduct])
    
    return(
        <div className="product-main">
            {isLoading?<i class=" spinner fa-solid fa-spinner"><span>Loading...</span></i>:null}
            {
                cartProduct.map((product,index)=>(
                    <div key={index} className="product-details">
                        <div className="product-title">{product.title}</div>
                        <div className="product-desImgGrp">
                            <img className="product-img" src={product.thumbnail} alt="product"></img>
                            <div className="product-desc">{product.description}</div>
                         </div>
                         <div className="product-price">${product.price}</div>
                    </div>
                ))
            }
        </div>
    )
}
















        
        
                
        //             <div className="product-details">
        //                 <div className="product-title">title</div>
        //                 <div className="product-desImgGrp">
        //                     <img className="product-img" alt="product"></img>
        //                     <div className="product-desc">description</div>
        //                 </div>
        //                 <div className="product-price">$price</div>
        //             </div>