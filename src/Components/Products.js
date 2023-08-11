import useApi from "../Hooks/useApi";

export default function Products() {

    const categoryName = "jewelery";
    const { data, isLoading, loadError } = useApi (`https://fakestoreapi.com/products/category/${categoryName}`);
     
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
                            <div className="products" key={index}>
                                {product.title}
                                <img loading="lazy" className="product-image" alt="product" src={product.image}></img>
                                Price: {product.price} USD
                            </div>
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