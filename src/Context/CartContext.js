import { createContext, useCallback, useContext, useState } from "react";

export const CartContext = createContext({
    items : {},
    total : 0,
    addItem : (product)=>{},
    removeItem : (product)=>{},
    cartOpen: false
});



export default function CartContextProvider({ children }) {

    const [cartOpen,setCartOpen] = useState(false);
    const [items,setItems] = useState({});
    const [total,setTotal] = useState(0);

    const addItem = useCallback((product)=>{
        const newItems = {...items};

        if(newItems[product.id]){
            newItems[product.id] = {
                ...newItems[product.id],
                quantity : newItems[product.id].quantity + 1 
            }
        }else{
            newItems[product.id] ={
                id : product.id,
                title : product.title,
                price : product.price,
                image : product.image,
                quantity : 1
            }
        }

        setItems(newItems);
        setTotal(total+ product.price);
    },[items,total]) 

    const removeItem = useCallback((product)=>{
        
        const newItems = {...items};

        if(!newItems[product.id]) return;

        if(newItems[product.id].quantity>1){
            newItems[product.id] = {
                ...newItems[product.id],
                quantity : newItems[product.id].quantity - 1 
            }
        }else{
            delete newItems[product.id];
        }
        setItems(newItems);
        setTotal(total - product.price);
    },[items,total]) 

    return (
 
        <CartContext.Provider
            value={{
                items,
                total,
                addItem,
                removeItem,
                cartOpen,
                setCartOpen
            }}
        >

            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);