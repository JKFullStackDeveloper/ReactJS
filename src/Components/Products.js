import { useState } from "react";
import { useProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

export default function Products() {

    const { data, isLoading, loadError } = useProductContext();
    const [serachItem, setSearchItem] = useState("");

    let filterData= serachItem===""?data:
    data.filter((product)=>{
        let lowerProduct = product.title.toLowerCase();
        let lowerSearch = serachItem.toLowerCase();
        return lowerProduct.includes(lowerSearch);
    })


    if (isLoading) {
        return (
            <div><i class=" spinner fa-solid fa-spinner"><span>Loading...</span></i></div>
        )
    } else if (loadError) {
        return <div>Load Error {loadError.message}</div>
    } else if (data.length > 0) {
        return (
            <div>
                <div className='serach-bar'>
                    <input onChange={(e)=>{setSearchItem(e.target.value)}} value={serachItem} className='search-txt' type='search' placeholder='search products' />
                    <button className='search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="product-head">
                    {
                        filterData.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <h>Product not found</h>
        )
    }
}