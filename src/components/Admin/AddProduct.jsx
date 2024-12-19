import React, { useState, useContext } from 'react';
import { ProductContext } from './ProductContext'; // Импортируйте ваш контекст
import { useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import './AddProduct.scss';

const AddProduct = () => {
    const { addProduct } = useContext(ProductContext); // Используйте контекст
    const navigate = useNavigate(); // Создайте экземпляр navigate
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [deliveryFee, setDeliveryFee] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ name, description, deliveryTime, deliveryFee });
        
        // Перенаправляем обратно на список продуктов
        navigate('/admin'); // Перенаправляем на страницу списка продуктов
    };

    const handleCancel = () => {
        // Сброс значений формы
        setName('');
        setDescription('');
        setDeliveryTime('');
        setDeliveryFee('');
        navigate('/admin'); // Перенаправляем на страницу списка продуктов при отмене
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"    
                    placeholder="Наименование" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="form-input"
                />      

                <div className="delivery-row">
                    <input 
                        type="number" 
                        placeholder="Комиссия за доставку" 
                        value={deliveryFee} 
                        onChange={(e) => setDeliveryFee(e.target.value)} 
                        required 
                        className="form-input delivery-input"
                    />
                    <input 
                        type="text" 
                        placeholder="Срок доставки" 
                        value={deliveryTime} 
                        onChange={(e) => setDeliveryTime(e.target.value)} 
                        required 
                        className="form-input delivery-input"
                    />
                </div>
                
                <input
                    type="text" 
                    placeholder="Описание" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                    className="form-input description-input"
                />

                <div className="button-group">
                    <button type="submit" className="form-button">Добавить</button>
                    <button type="button" className="form-button cancel-button" onClick={handleCancel}>Отмена</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;