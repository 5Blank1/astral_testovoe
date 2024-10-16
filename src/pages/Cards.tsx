import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchWords} from '../store/wordsSlice';
import {Word} from "../types";
import '../styles/Cards.css';

const Cards: React.FC = () => {
    const dispatch = useAppDispatch();
    const { words, loading, error } = useAppSelector((state) => state.words);
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        dispatch(fetchWords());
    }, [dispatch]);

    const handleFlip = (id: number) => {
        setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const motivationalQuotes = [
        'Word of the Day',
        'Keep Learning',
        'Expand Your Vocabulary',
        'Knowledge is Power',
        'Never Stop Growing',
    ];

    const enrichedWords = words.map((word: Word) => ({
        ...word,
        quote: motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)],
        isFlipped: flippedCards[word.id] || false,
        onFlip: () => handleFlip(word.id),
    }));

    if (loading) {
        return (
            <div>
                <Header profile={isAuthenticated ? { username: 'admin' } : null} />
                <main>
                    <p>Загрузка карточек...</p>
                </main>
                <Footer contacts={{ email: 'contact@example.com', phone: '123-456-7890' }} />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Header profile={isAuthenticated ? { username: 'admin' } : null} />
                <main>
                    <p style={{ color: 'red' }}>Ошибка: {error}</p>
                </main>
                <Footer contacts={{ email: 'contact@example.com', phone: '123-456-7890' }} />
            </div>
        );
    }

    return (
        <div>
            <Header profile={isAuthenticated ? { username: 'admin' } : null} />
            <main>
                <CardList cards={enrichedWords} />
            </main>
            <Footer contacts={{ email: 'contact@example.com', phone: '123-456-7890' }} />
        </div>
    );
};

export default Cards;
