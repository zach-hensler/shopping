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
    });

    const renderReviews = () => itemDetails?.reviews.map((review, index) => (
        <Card
            key={index}
            cardBody={<><p>{review.rating}/5</p><p>{review.text}</p></>}
        />
    ));

    return (
        <div>
            <Card
                cardHeader={itemDetails?.name}
                cardBody={<p>{itemDetails?.description}</p>}
            />
            {renderReviews()}
        </div>
    );
};
