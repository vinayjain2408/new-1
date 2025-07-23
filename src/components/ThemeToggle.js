import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    return (
        <button onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? "Light Theme" : "Dark Theme"}
        </button>
    );
};

export default ThemeToggle;