import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import Category from "./Category";
import { useCartContext } from "../Context/CartContext";

export default function Header() {
    const {cartOpen,setCartOpen} =useCartContext();
    const [categories,setCategories] = useState([]);
    const { data, isLoading, loadError } = useApi('https://fakestoreapi.com/products/categories');

    const openCloseCart = ()=>{
        if(cartOpen){
            setCartOpen(false)
        }else{
            setCartOpen(true)
        }
    }
    useEffect(()=>{
        if(!isLoading){
            data.unshift("All Category");
            setCategories([...data]);
        }
    },[data,isLoading]);

    if (isLoading) {
        return <div>Data is loading...</div>
    } else if (loadError) {
        return <div>Load Error {loadError.message}</div>
    } else {
        return (
            <div className="main-cat">
                {categories.map((category,i)=>(
                    <Category key={i}
                    category={category} 
                    />
                ))}
            <button onClick={openCloseCart} className="cart-icon"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        );
    }
} 