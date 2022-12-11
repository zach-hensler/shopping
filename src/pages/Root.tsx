import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components';

export const Root = () => {
    return <><Header /><div className='w-11/12 xl:w-3/5 m-auto'><Outlet /></div></>;
};
