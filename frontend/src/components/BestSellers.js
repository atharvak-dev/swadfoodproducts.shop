import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BestSellers.css';

const BestSellers = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchBestSellers = async () => {
            const response = await axios.get('/api/products/best-sellers');
            setProducts(response.data);
        };
        fetchBestSellers();
    }, []);

    return (
        <div className="best-sellers">
            <h2>Best Sellers</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <span className="best-seller-tag">Best Seller</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellers;
