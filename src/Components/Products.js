import { useProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

export default function Products() {

    const {data,isLoading,loadError} = useProductContext();
     
    if (isLoading) {
        return (
            <div><i class=" spinner fa-solid fa-spinner"><span>Loading...</span></i></div>
        )
    } else if (loadError) {
        return <div>Load Error {loadError.message}</div>
    } else if (data.length > 0) {
        return (
            <div>
                <h2>Product Details</h2>
                <div className="product-head">
                    {
                        data.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <h3>Product not found</h3>
        )
    }
}