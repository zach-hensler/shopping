import React from 'react';

interface ItemPreviewCardProps {
    name: string
    description: string
    avgRating: number
}

export const ItemPreviewCard:React.FC<ItemPreviewCardProps> = ({
    name,
    description,
    avgRating,
}) => {
    const containerBorderStyles = 'border-2 border-green-700 hover:border-4 hover:border-green-900';
    const containerSizeStyles = 'p-2 m-5 h-full rounded-md';
    return (
        <div className={`${containerBorderStyles} ${containerSizeStyles} shadow-md hover:shadow-xl`}>
            <h3>{name} - {avgRating}/5</h3>
            <hr />
            <p>{description}</p>
        </div>
    );
};
