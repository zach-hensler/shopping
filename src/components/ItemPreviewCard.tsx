import React from 'react';
import { Link } from 'react-router-dom';

interface ItemPreviewCardProps {
    name: string
    description: string
    path: string
    avgRating: number
}

export const ItemPreviewCard:React.FC<ItemPreviewCardProps> = ({
    name,
    description,
    path,
    avgRating,
}) => {
    const containerBorderStyles = 'border-2 border-green-700 hover:border-4 hover:border-green-900';
    const containerSizeStyles = 'p-2 m-5 w-1/5 rounded-md';
    return (
        <Link to={path} className={`${containerBorderStyles} ${containerSizeStyles} shadow-md hover:shadow-2xl`}>
            <h3>{name} - {avgRating}/5</h3>
            <hr />
            <p>{description}</p>
        </Link>
    );
};
