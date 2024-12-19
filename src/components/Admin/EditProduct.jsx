import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Импортируйте useNavigate
import { ProductContext } from './ProductContext'; // Импортируйте ваш контекст
import './EditProduct.scss';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Создайте экземпляр navigate
    const { products, updateProduct } = useContext(ProductContext); // Используйте контекст
    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [deliveryFee, setDeliveryFee] = useState('');

    useEffect(() => {
        // Найти продукт по id
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setName(foundProduct.name);
            setDescription(foundProduct.description);
            setDeliveryTime(foundProduct.deliveryTime);
            setDeliveryFee(foundProduct.deliveryFee);
        }
    }, [id, products]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика для обновления товара
        const updatedProduct = {
            id: parseInt(id),
            name,
            description,
            deliveryTime,
            deliveryFee,
        };

        // Обновляем продукт
        updateProduct(updatedProduct); // Используем функцию обновления

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

    if (!product) return <div>Загрузка...</div>;

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
                    <button type="submit" className="form-button">Сохранить</button>
                    <button type="button" className="form-button cancel-button" onClick={handleCancel}>Отмена</button>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;