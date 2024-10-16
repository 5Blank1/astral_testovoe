import React from 'react';
import '../styles/Card.css';
import {CardProps} from "../types"

const Card: React.FC<CardProps> = ({ quote, word, example, translation, isFlipped, onFlip }) => {
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`}>
            <div className="card-inner">
                <div className="card-front">
                    <h3>{quote}</h3>
                    <h2>{word}</h2>
                    <p>{example}</p>
                    <button className="card-button" onClick={onFlip}>learn more</button>
                </div>
                <div className="card-back">
                    <h2>Перевод</h2>
                    <p>{translation}</p>
                    <button onClick={onFlip} className="card-button">Назад</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
