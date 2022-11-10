import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { mockGetItems } from '../api/items';
import { Card, CardRow } from '../components';
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
            <Link key={shopItem.id} to={`/item/${shopItem.id}/details`}><Card cardHeader={shopItem.name} cardBody={shopItem.description}/></Link>
        ));
    };

    return (
        <div>
            <h2>Shop</h2>
            <CardRow Cards={renderShopItems()} />
        </div>
    );
};
