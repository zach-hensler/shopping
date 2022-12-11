import React from 'react';

import { HeaderItem, SearchBar } from './';

export const Header = () => {
    return (
        <div className='bg-blue-400 text-white'>
            <div className='w-3/4 m-auto flex justify-between items-center'>
                <HeaderItem name="Home" route="/" />
                <SearchBar />
                <HeaderItem name="Profile" route="/profile" />
                <HeaderItem name="Cart" route="/cart" />
            </div>
        </div>
    );
};
