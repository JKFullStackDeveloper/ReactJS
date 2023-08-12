import { createContext, useContext } from "react";
import useApi from "../Hooks/useApi";
import { useCategoryContext } from "./CategoryContext";

export const ProductContext = createContext();

export default function ProductContextProvider({children}){
    
    const {selectedCategory} = useCategoryContext();
    const { data, isLoading, loadError } = useApi (`https://fakestoreapi.com/products/category/${selectedCategory}`);
    
    return(
        <ProductContext.Provider
            value={{
                data,
                isLoading,
                loadError
            }}    
        >
        {children}
    </ProductContext.Provider>
    )    
}

export const useProductContext = ()=> useContext(ProductContext);

