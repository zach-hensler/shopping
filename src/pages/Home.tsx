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
                key={shopItem.id}
                path={`/item/${shopItem.id}/details`}
                name={shopItem?.name || ''}
                description={shopItem?.description || ''}
                avgRating={shopItem?.avgRating || 0}
                thumbnailUrl={shopItem?.thumbnailUrl || ''}
                thumbnailAltText={shopItem?.thumbnailAltText || shopItem?.name || 'Preview Thumbnail'}
            />
        ));
    };

    return (
        <div>
            <div className='flex flex-col items-stretch flex-wrap justify-center'>{renderShopItems()}</div>
        </div>
    );
};
