import React from "react";

export default function Category({setSelectedCategory,category}) {
    return (    
        <div onClick={() => { setSelectedCategory(category)}} className="header">
            {category}
        </div>
    );
}
