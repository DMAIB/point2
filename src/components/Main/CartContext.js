import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    
    const [cartCount, setCartCount] = useState(0);
    const [addedProducts, setAddedProducts] = useState([]); // Добавляем состояние для добавленных товаров

    const updateCartCount = (newCount) => {
        setCartCount(newCount);
    };

    const addProduct = (index) => {
        if (!addedProducts.includes(index)) {
            setAddedProducts([...addedProducts, index]);
            setCartCount(cartCount + 1);
        }
    };

    return (
        <CartContext.Provider value={{ cartCount, updateCartCount, addedProducts, addProduct }}>
            {children}
        </CartContext.Provider>
    );
};