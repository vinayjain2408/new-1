import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './features/products/productSlice';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
