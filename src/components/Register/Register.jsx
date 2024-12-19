import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import googleImg from '../Pict/G.png';
import facebookImg from '../Pict/F.png';
import './Register.scss';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/auth');
  };

  return (
    <div className="register-container">
      <h2>Регистрация</h2>
      <p>У вас уже есть аккаунт? <a href="/Auth" className="register-link">Войдите</a></p>
      
      <div className="social-buttons">
        <button className="social-button google-button">
          <img src={googleImg} alt="Google" /> Google
        </button>
        <button className="social-button facebook-button">
          <img src={facebookImg} alt="Facebook"/> Facebook
        </button>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('firstName', { required: true })}
            placeholder="Имя фамилия"
            type="text"
          />
          {errors.firstName && <span className="error-message">Это поле обязательно </span>}
        </div>

        <div>
          <input
            {...register('email', { required: true })}
            placeholder="E-mail / Логин"
            type="email"
          />
          {errors.email && <span className="error-message">Это поле обязательно </span>}
        </div>

        <div>
          <input
            {...register('phone', { required: true })}
            placeholder="Номер телефона"
            type="tel"
          />
          {errors.phone && <span className="error-message">Это поле обязательно </span>}
        </div>

        <div>
          <input
            {...register('password', { required: true })}
            placeholder="Пароль"
            type="password"
          />
          {errors.password && <span className="error-message">Это поле обязательно </span>}
        </div>

        <div>
          <input
            {...register('confirmPassword', { required: true })}
            placeholder="Повторить пароль"
            type="password"
          />
          {errors.confirmPassword && <span className="error-message">Это поле обязательно </span>}
        </div>

        <div className="remember-me2">
          <input type="checkbox" {...register('rememberMe', { required: true })} id="rememberMe" />
          <label htmlFor="rememberMe">Согласен с публичным договором предоставления услуг</label>
          {errors.rememberMe && <span className="error-message2">Вы должны согласиться с условиями</span>}
        </div>

        <div className="register-button">
          <button type="submit" className="register-submit-button">РЕГИСТРАЦИЯ</button>
        </div>
      </form>
    </div>
  );
};

export default Register;