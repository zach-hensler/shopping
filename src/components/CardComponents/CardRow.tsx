import React from "react";

interface CardRowProps {
    Cards: JSX.Element[]
}

export const CardRow:React.FC<CardRowProps> = ({ Cards }) => {
    const getCardChildClass = () => {
        if (Cards.length === 4) return "four-cards";
        if (Cards.length === 3) return "three-cards";
        return "two-cards";
    };

    const cardChildren = Cards.map((card, idx) => (
        <div key={`card-row-item-${idx}`} className={`card-row-child ${getCardChildClass()}`}>
            {card}
        </div>
    ));

    return (
        <div className="card-row">
            {cardChildren}
        </div>
    );
};
