import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";

import { ItemDetails, Home } from './pages';
import './css/index.css';
import reportWebVitals from './reportWebVitals';

const router = createHashRouter([
    {
        path: "/",
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
], { basename: '/' });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
