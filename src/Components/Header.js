import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Header(){

    const [catagories, setCatagories] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError]=useState(null);

    const fetchCatagory = async ()=>{
        try{
            const res = await axios.get('https://fakestoreapi.com/products/categories');
            setCatagories(res.data);
            setIsLoading(false);
        }catch(e){
            setIsError(e);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchCatagory();
    },[catagories]);

    return(
        <>
        <div className="main-cat">
        {catagories.length>0?
            catagories.map((catagory,index)=>(
                <div className="header">{catagory}</div>
            ))
        :"Catagory not found"}
        </div>
        </>
    )
}