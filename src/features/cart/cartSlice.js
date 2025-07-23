import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const exists = state.find((item) => item.id === product.id);
            if (exists) {
                exists.quantity += 1;
            } else {
                state.push({ ...product, quantity: 1 });
            }
        },
        increaseQty: (state, action) => {
            const item = state.find((i) => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseQty: (state, action) => {
            const item = state.find((i) => i.id === action.payload);
            if (item.quantity > 1) item.quantity -= 1;
        },
        removeFromCart: (state, action) => {
            return state.filter((i) => i.id !== action.payload);
        },
    },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;