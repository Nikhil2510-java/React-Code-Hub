import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = () => {
    const params = useParams();
    const [productData, setProductData] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products/' + params.productId);
            console.log(res.data);
            setProductData(res.data);
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '32px',
            margin: '40px auto',
            padding: '32px',
            maxWidth: '800px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            background: '#f8fafc',
            color: '#000'
        }}>
            <div style={{
                flex: '0 0 260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 8px #0001',
                padding: '24px',
                border: '2px solid #ddd'
            }}>
                <img
                    src={productData.image}
                    alt={productData.title}
                    style={{ width: '200px', height: 'auto', objectFit: 'contain' }}
                />
            </div>
            <div style={{ flex: 1 }}>
                <h2 style={{ marginBottom: '12px' }}>{productData.title}</h2>
                <p style={{ color: '#000', marginBottom: '8px' }}>
                    <b>Category:</b> {productData.category}
                </p>
                <p style={{ color: '#000', marginBottom: '16px' }}>{productData.description}</p>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px', color: '#000' }}>
                    Price: ${productData.price}
                </div>
                {productData.rating && (
                    <div style={{ color: '#ff9800', fontWeight: 500 }}>
                        Rating: {productData.rating.rate} ★ ({productData.rating.count} reviews)
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductsList;