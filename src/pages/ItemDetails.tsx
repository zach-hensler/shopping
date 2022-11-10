import React from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetails: React.FC = () => {
    const { itemId } = useParams();

    return (
        <div>
            {itemId}
        </div>
    );
};
