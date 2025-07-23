import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQty, decreaseQty, removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div style={{ padding: '10px' }}>
            <h2>Cart Items</h2>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                        <h4>{item.title}</h4>
                        <img src={item.image} alt={item.title} width="80" height="80" />
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
