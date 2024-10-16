import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import {useDispatch} from "react-redux";
import {logout} from "../store/authSlice";
import {HeaderProps} from "../types"

const Header: React.FC<HeaderProps> = ({ profile }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <header>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/cards">Карточки</Link>
                {profile ? <Link to="/profile">Профиль</Link> : <Link to="/login">Вход</Link>}
            </nav>
            {profile && <div>Пользователь: {profile.username} <button onClick={handleLogout}>Выйти</button> </div> }
        </header>
    );
};

export default Header;
