import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const { filteredItems, loading } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({ title: '', price: '', image: '' });
    const [errors, setErrors] = useState({ title: '', price: '', image: '' });

    const validate = () => {
        const newErrors = { title: '', price: '', image: '' };
        let isValid = true;

        if (newProduct.title.trim().length < 3) {
            newErrors.title = 'Title must be at least 3 characters.';
            isValid = false;
        }

        if (!newProduct.price || parseFloat(newProduct.price) <= 0) {
            newErrors.price = 'Price must be a positive number.';
            isValid = false;
        }

        if (!newProduct.image) {
            newErrors.image = 'Please upload an image.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const   handleAdd = () => {
        if (validate()) {
            const product = {
                ...newProduct,
                id: Math.random(),
                price: parseFloat(newProduct.price),
            };
            dispatch(addProduct(product));
            setNewProduct({ title: '', price: '', image: '' });
            setErrors({ title: '', price: '', image: '' });
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProduct({ ...newProduct, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div style={{ padding: '10px' }}>
            <h2>All Products</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {filteredItems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            <div style={{ marginTop: '20px' }}>
                <h3>Add Product</h3>
                <input
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                />
                {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}

                <input
                    placeholder="Price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}

                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}

                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
};

export default Home;