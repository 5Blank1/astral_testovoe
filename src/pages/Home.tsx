import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header profile={{ username: 'admin' }} />
            <main>
                <h1>Добро пожаловать в приложение для изучения иностранных слов!</h1>
                <p>Здесь вы можете учить новые слова, отслеживать прогресс и изменять свой профиль.</p>
            </main>
            <Footer contacts={{ email: 'contact@example.com', phone: '123-456-7890' }} />
        </div>
    );
};

export default Home;
