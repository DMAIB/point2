import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

// Создаем контекст для аутентификации
const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

// Компонент для управления аутентификацией
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Проверяем localStorage на наличие информации о пользователе
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true'); // Сохраняем состояние в localStorage
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); // Удаляем информацию при выходе
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Компонент для выхода из системы
export const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate(); // Получаем доступ к navigate

    const handleLogout = () => {
        logout(); // Вызываем функцию logout
        navigate('/auth'); // Перенаправляем на страницу авторизации после выхода
    };

    return (
        <a href="/" onClick={handleLogout} className="nav-link">
            Выход
        </a>
    );
};