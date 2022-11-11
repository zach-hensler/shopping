import React, { useEffect, useState } from 'react';

import { mockGetItems } from '../api/items';
import { ItemPreviewCard } from '../components';
import { shopItem } from '../types';

export const Home:React.FC = () => {
    const [shopItems, setShopItems] = useState<shopItem[]>([]);

    useEffect(() => {
        mockGetItems()
            .then(items => setShopItems(items))
            .catch(error => console.error(error));
    }, []);

    const renderShopItems = () => {
        return shopItems.map(shopItem => (
            <ItemPreviewCard
                key={shopItem.id} path={`/item/${shopItem.id}/details`}
                name={shopItem?.name || ''} description={shopItem?.description || ''} avgRating={shopItem?.avgRating || 0}
            />
        ));
    };

    return (
        <div>
            <h2>Shop</h2>
            <div className='flex items-stretch flex-wrap'>{renderShopItems()}</div>
        </div>
    );
};
