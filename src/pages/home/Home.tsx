import React from 'react';
import { Link } from 'react-router-dom';

export const Home:React.FC = () => {
    return (
        <div>
            Home Page
            <Link to="/" >Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
    );
};
