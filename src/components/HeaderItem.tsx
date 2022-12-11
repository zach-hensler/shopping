import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderItemProps {
    name: string
    route: string
}

export const HeaderItem:React.FC<HeaderItemProps> = ({ name, route }) => {
    const activeStyles = 'border border-black bg-blue-800 shadow-md';
    const nonActiveStyles = 'border border-blue-800 bg-blue-800';
    const constantStyles = 'hover:bg-blue-900 hover:shadow-lg rounded-md p-2 pl-5 pr-5';
    return (
        <NavLink
            to={route}
            className={({ isActive }) => `${isActive ? activeStyles : nonActiveStyles} ${constantStyles}`}
        >
            {name}
        </NavLink>
    );
};
