import React from "react";
import { useCategoryContext } from "../Context/CategoryContext";

export default function Category({category}) {

    const {setSelectedCategory} = useCategoryContext();
    const handleClick = ()=> {
        setSelectedCategory(category);
    }

    return (    
        <div onClick={handleClick} className="header">
            {category}
        </div>
    );
}
