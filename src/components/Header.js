import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../features/products/productSlice';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value));
    };

    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <div>
                <Link to="/">Home</Link> | <Link to="/cart">Cart ({cart.length})</Link>
            </div>
            <input placeholder="Search..." onChange={handleSearch} />
            <ThemeToggle />
        </header>
    );
};

export default Header;