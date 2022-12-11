import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { mockGetItemById } from '../api/items';
import { Card } from '../components';
import { shopItem } from '../types';

export const ItemDetails: React.FC = () => {
    const { itemId } = useParams();
    const [itemDetails, setItemDetails] = useState<shopItem>();

    useEffect(() => {
        if (!itemId) {
            console.error('Could not find item');
            return;
        }
        mockGetItemById(itemId)
            .then(item => setItemDetails(item));
    }, []);

    const styledHr = <hr className='my-10'/>;

    const renderDetailsSection = () => {
        return (
            <div className='w-2/6 flex flex-col justify-start'>
                <img src={itemDetails?.thumbnailUrl} alt={itemDetails?.thumbnailAltText || itemDetails?.name || 'Product Photo'} />
                {styledHr}
                <h2 className='font-bold text-lg'>About the item</h2>
                <p>{itemDetails?.description}</p>
            </div>
        );
    };

    const renderPurchaseInfoSection = () => {
        const borderStyles = 'border border-yellow-700';
        const flexStyles = 'flex flex-col justify-around align-center';

        return (
            <div className={`w-2/6 ${flexStyles} text-center ${borderStyles}`}>
                <h2 className='font-bold text-xl'>{itemDetails?.name}</h2>
                <h3 className='text-lg'>{itemDetails?.price || 'Price Unavailable'}</h3>
                <button className='bg-yellow-500 hover:bg-yellow-600 border border-yellow-700 rounded-md'>Add to Cart</button>
            </div>
        );
    };

    const renderReviews = () => itemDetails?.reviews?.map((review, index) => (
        <Card
            key={index}
            cardBody={<><p>{review.rating}/5</p><p>{review.text}</p></>}
        />
    ));

    return (
        <div>
            <div className='flex flex-row justify-between pt-10'>
                {renderDetailsSection()}
                {renderPurchaseInfoSection()}
            </div>
            {styledHr}
            {renderReviews()}
        </div>
    );
};
