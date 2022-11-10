import { shopItem } from '../types';

export const mockGetItems = () => {
    return new Promise<shopItem[]>((resolve) => {
        const mockData:shopItem[] = [
            {name: 'Item1', id: "1", description: 'This does things', quantityRemaining: 3},
            {name: 'Item2', id: "2", description: 'This does things', quantityRemaining: 2},
            {name: 'Item3', id: "3", description: 'This does things', quantityRemaining: 50},
            {name: 'Item3', id: "4", description: 'This does things', quantityRemaining: 50},
        ];
        resolve(mockData);
    });
};
