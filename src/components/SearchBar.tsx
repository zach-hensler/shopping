import React, { ChangeEvent, useState } from 'react';

export const SearchBar = () => {
    const [hasBeenFocused, setHasBeenFocused] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('Search');

    const unFocusedStyles = 'text-gray-500';
    const borderStyles = 'border rounded-md border-black';
    const colorStyles = 'bg-gray-300 text-black';
    const spacingStyles = 'w-3/5 px-2.5 py-1.5 my-2.5';
    const aggregatedStyles = `${borderStyles} ${colorStyles} + ${spacingStyles} ${isFocused ? '' : unFocusedStyles}`;

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
        if (hasBeenFocused) return;

        setHasBeenFocused(true);
        setSearchTerm('');
    };

    const onSearchTermUpdate = (event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);

    return (
        <input
            className={aggregatedStyles}
            value={searchTerm}
            onChange={onSearchTermUpdate}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );
};
