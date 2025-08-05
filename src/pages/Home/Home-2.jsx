import Products from "../../component/Products/Products";
import { useState , useEffect } from 'react';
import axios from 'axios';
const Home2 = () => {

    const [productData, setProductData] = useState([]);
    const data = "https://fakestoreapi.com/products";

    const fetchData = async () => {
        try {
            const res = await axios.get(data);
            console.log("Product data fetched successfully:", res);
            setProductData(res.data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [viewType, setViewType] = useState('list');

    const changeViewType = () => {
        setViewType(viewType === 'list' ? 'grid' : 'list');
    }

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button style={{
                margin: '20px'
            }}
            onClick={changeViewType}>{viewType === "list" ? 'Grid' : 'List'} View</button>
            <div
                style={{
                    display: viewType === "grid" ? 'flex' : '',
                    flexWrap: viewType === "grid" ? 'wrap' : '',
                    justifyContent: viewType === "grid" ? 'flex-start' : 'space-around',
                    gap: viewType === "grid" ? '20px' : '',
                }}
            >
                {
                    productData.map((product, index) => (
                        <div
                            key={`${product.title}_${index}`}
                            style={
                                viewType === "grid"
                                    ? { flex: '0 0 23%', boxSizing: 'border-box' }
                                    : { width: '100%' }
                            }
                        >
                            <Products
                                {...product}
                                viewType={viewType}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home2;