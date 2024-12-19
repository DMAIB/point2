import React, { useState } from 'react';
import './Main.scss'; // Импорт стилей
import { useCart } from './CartContext'; // Импортируйте useCart
import ebayImage from '../Pict/eBay.png';
import yooxImage from '../Pict/Yoox.png';
import zaraImage from '../Pict/Zara.png';
import kithenAidImage from '../Pict/Kit.png';
import addToCartImage from '../Pict/arrow.png'; // Импорт изображения кнопки

const products = [
    {
        image: ebayImage,
        name: 'eBay',
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.',
        deliveryTime: 'до 7 дней',
        deliveryFee: 0.68,
    },
    {
        image: yooxImage,
        name: 'YOOX',
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.',
        deliveryTime: 'до 7 дней',
        deliveryFee: 0.68,
    },
    {
        image: zaraImage,
        name: 'ZARA',
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.',
        deliveryTime: 'до 7 дней',
        deliveryFee: 0.68,
    },
    {
        image: ebayImage,
        name: 'eBay',
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.',
        deliveryTime: 'до 7 дней',
        deliveryFee: 0.68,
    },
    {
        image: kithenAidImage,
        name: 'KITHEN AID',
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.',
        deliveryTime: 'до 7 дней',
        deliveryFee: 0.68,
    },
    {
        image: yooxImage,
        name: 'YOOX',
        description: 'Веб-сайтом eBay.com и его местными версиями в нескольких странах владела компания eBay Enterprise.',
        deliveryTime: 'до 7 дней',
        deliveryFee: 0.68,
    },
];

const Main = () => {
    const { cartCount, addedProducts, addProduct } = useCart(); // Извлекаем добавленные продукты и метод для добавления
    return (
        <div className="main">
            <div className="container">
                {products.map((product, index) => (
                    <div className="card" key={index}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className='del'>Срок доставки: <strong>{product.deliveryTime}</strong></p>
                        <div className="kom">
                            <p>Комиссия на доставку: <strong>{product.deliveryFee}%</strong></p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {!addedProducts.includes(index) ? (
                                    <img 
                                        src={addToCartImage} 
                                        alt="Добавить в корзину" 
                                        className="add-to-cart" 
                                        onClick={() => addProduct(index)} // Используем метод из контекста
                                    />
                                ) : (
                                    <span style={{ marginLeft: '10px', color: 'green' }}>Добавлено</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;