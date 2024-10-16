import React from 'react';
import Card from './Card';
import {CardListProps} from "../types"

const CardList: React.FC<CardListProps> = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
};

export default CardList;
