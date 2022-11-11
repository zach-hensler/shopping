import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link key={shopItem.id} to={`/item/${shopItem.id}/details`} className="w-1/4">
                <ItemPreviewCard name={shopItem.name} description={shopItem.description} avgRating={3}/>
            </Link>
        ));
    };

    return (
        <div>
            <h2>Shop</h2>
            <div className='flex items-stretch flex-wrap'>{renderShopItems()}</div>
        </div>
    );
};
