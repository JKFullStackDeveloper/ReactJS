import useApi from "../Hooks/useApi";

export default function Header() {

    const { data, isLoading, loadError } = useApi('https://fakestoreapi.com/products/categories');

    if (isLoading) {
        return <div>Data is loading...</div>
    } else if (loadError) {
        return <div>Load Error {loadError.message}</div>
    } else {
        return (
            <div className="main-cat">
                {data.map((catagory, index) => (
                    <div className="header" key={index}>
                        {catagory}
                    </div>
                ))}
            </div>
        );
    }
} 