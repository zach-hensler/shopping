import React from 'react';
import { Link } from 'react-router-dom';

interface ItemPreviewCardProps {
    thumbnailUrl: string
    thumbnailAltText: string
    name: string
    description: string
    path: string
    avgRating: number
}

export const ItemPreviewCard:React.FC<ItemPreviewCardProps> = ({
    thumbnailUrl,
    thumbnailAltText,
    name,
    description,
    path,
    avgRating,
}) => {
    const containerBorderStyles = 'border border-yellow-700 hover:border-2 hover:border-yellow-500 shadow-md hover:shadow-md';
    const containerSizeStyles = 'p-2 m-5 w-full rounded-md';
    const containerFlexStyles = 'flex flex-row';

    return (
        <Link to={path} className={`${containerBorderStyles} ${containerSizeStyles} ${containerFlexStyles}`}>
            <div className='w-1/4 h-36'>
                <img src={thumbnailUrl} alt={thumbnailAltText} className='m-auto w-auto max-w-full h-auto max-h-full' />
            </div>
            <div>
                <h2 className='font-bold text-lg pb-1.5'>{name} - {avgRating}/5</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
};
