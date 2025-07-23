import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/products/productSlice';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        theme: themeReducer,
    },
});