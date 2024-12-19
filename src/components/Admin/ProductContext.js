import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const initialProducts = [
    { id: 1, name: 'ZARA', description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.', deliveryTime: 'до 7 дней', deliveryFee: 0.68, imageUrl: 'https://via.placeholder.com/100' },
    { id: 2, name: 'ZARA', description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.', deliveryTime: 'до 7 дней', deliveryFee: 0.68, imageUrl: 'https://via.placeholder.com/100' },
    { id: 3, name: 'ZARA', description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.', deliveryTime: 'до 7 дней', deliveryFee: 0.68, imageUrl: 'https://via.placeholder.com/100' },
    { id: 4, name: 'ZARA', description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise. Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.', deliveryTime: 'до 7 дней', deliveryFee: 0.68, imageUrl: 'https://via.placeholder.com/100' },
];

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts);

    const addProduct = (product) => {
        setProducts([...products, { id: products.length + 1, ...product }]);
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const updateProduct = (updatedProduct) => {
        setProducts(products.map(product => 
            product.id === updatedProduct.id ? updatedProduct : product
        ));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

