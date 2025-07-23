import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const res = await axios.get('https://fakestoreapi.com/products');
        return res.data;
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        filteredItems: [],
        loading: false,
        search: '',
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
            state.filteredItems.push(action.payload);
        },
        setSearch: (state, action) => {
            state.search = action.payload;
            state.filteredItems = state.items.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.filteredItems = action.payload;
            });
    },
});

export const { addProduct, setSearch } = productSlice.actions;
export default productSlice.reducer;
