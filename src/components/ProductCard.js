import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.title} width="100" height="100" />
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;