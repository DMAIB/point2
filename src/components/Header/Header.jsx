import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.scss'; 
import { useCart } from '../Main/CartContext'; 
import { useAuth, LogoutButton } from '../Auth/AuthContext'; // Импортируем LogoutButton

const Header = () => {
    const { cartCount } = useCart(); 
    const { isAuthenticated } = useAuth(); 

    return (
        <header className="header">
            <nav className="nav">
                {!isAuthenticated ? (
                    <>
                        <Link to="/auth" className="nav-link">Авторизация</Link>
                        <Link to="/register" className="nav-link">Регистрация</Link>
                    </>
                ) : (
                    <>
                        <Link to="/main" className="nav-link">Список товаров</Link>
                        <Link to="/admin" className="nav-link">Админ-панель</Link>
                        <div className="cart">
                            Корзина: {cartCount} шт
                        </div>
                        <LogoutButton /> {/* Используем компонент LogoutButton */}
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;