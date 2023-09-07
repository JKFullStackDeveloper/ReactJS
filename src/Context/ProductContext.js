import { createContext, useContext } from "react";
import useApi from "../Hooks/useApi";
import { useCategoryContext } from "./CategoryContext";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {

    const { selectedCategory } = useCategoryContext();
    const URL =
    selectedCategory !== "All Category"
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : `https://fakestoreapi.com/products`;
    const { data, isLoading, loadError } = useApi(URL);

    return (
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

export const useProductContext = () => useContext(ProductContext);

