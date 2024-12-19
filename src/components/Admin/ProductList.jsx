import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './ProductContext'; // Импортируйте ваш контекст
import './ProductList.scss';
import image from '../Pict/prod.png';

const ProductList = () => {
    const { products, deleteProduct } = useContext(ProductContext); // Используйте контекст

    return (
        <div className="product-list">
            <Link to="/add" className="add-button">Добавить</Link>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className='late'>
                                <p>
                                    <span>Комиссия на доставку:</span> <strong>{product.deliveryFee}%</strong>
                                    <span className="spacing"></span>
                                    <span>Сроки доставки:</span> <strong>{product.deliveryTime}</strong>
                                </p>
                            </div>
                            <div className="product-actions">
                                <Link to={`/edit/${product.id}`} className="action-button edit-button">Редактировать</Link>
                                <button className="action-button delete-button" onClick={() => deleteProduct(product.id)}>Удалить</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;