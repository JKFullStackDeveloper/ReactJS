import { useEffect } from "react";
import useApi from "../Hooks/useApi";
import Category from "./Category";

export default function Header({setSelectedCategory}) {

    const { data, isLoading, loadError } = useApi('https://fakestoreapi.com/products/categories');

    useEffect(()=>{
        if(data){
            setSelectedCategory(data);
        }
    },[data,setSelectedCategory]);

    if (isLoading) {
        return <div>Data is loading...</div>
    } else if (loadError) {
        return <div>Load Error {loadError.message}</div>
    } else {
        return (
            <div className="main-cat">
                {data.map((category,i)=>(
                
                    <Category key={i}
                    category={category}
                    setSelectedCategory={setSelectedCategory} 
                    />
                     
                ))}
            </div>
        );
    }
} 