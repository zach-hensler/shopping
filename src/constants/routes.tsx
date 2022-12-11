import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ItemDetails, Home, Root } from '../pages';

export const routes:RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "cart",
                element: <div>cart</div>,
            },
            {
                path: "item/:itemId/details",
                element: <ItemDetails />,
            },
        ],
    },
];
