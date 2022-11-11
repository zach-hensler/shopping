import { shopItem } from '../types';

const mockItemDb:shopItem[] = [
    {
        name: 'Burnt Toast', id: "1", description: 'Bread that has been cooked slightly to significantly too long', quantityRemaining: 3,
        reviews: [
            { rating: 4, text: "A product of superior quality and unparalleled taste. Truly a marvel of the modern kitchen and something every self respecting chef should have displayed. Would be five stars, but there was no warning that the more burnt it becomes the higher the chance it can be used as a weapon. Would recommend." },
            { rating: 2, text: "It's okay" },
        ],
    },
    {
        name: 'Holy Hand Grenade of Antioch', id: "2",
        description: 'Once the number three, being the third number, be reached, then lobbest thou thy Holy Hand Grenade of Antioch towards thy foe, who, being naughty in My sight, shall snuff it.', quantityRemaining: 2,
        reviews: [{ rating: 2, text: "Right. One... two... five!" }],
    },
    {
        name: 'Orange Cat', id: "3", description: 'He\'s not for sale', quantityRemaining: 0,
        reviews: [{ rating: 5, text: "He's kinda dumb, but he's got the spirit" }],
    },
    {
        name: 'Guide to the Galaxy', id: "4", description: "Has already supplanted the great Encyclopedia Galactica as the standard repository of all knowledge and wisdom", quantityRemaining: 0,
        reviews: [
            { rating: 4, text: "First, it is slightly cheaper; and secondly it has the words DON'T PANIC inscribed in large friendly letters on its cover" },
            { rating: 5, text: "More popular than the Celestial Home Care Omnibus, better selling than Fifty More Things to do in Zero Gravity, and more controversial than Oolon Colluphid's trilogy of philosophical blockbusters Where God Went Wrong, Some More of God's Greatest Mistakes and Who is this God Person Anyway?" },
        ],
    },
    {
        name: 'Guide to the Galaxy', id: "4", description: "Has already supplanted the great Encyclopedia Galactica as the standard repository of all knowledge and wisdom", quantityRemaining: 0,
        reviews: [
            { rating: 4, text: "First, it is slightly cheaper; and secondly it has the words DON'T PANIC inscribed in large friendly letters on its cover" },
            { rating: 5, text: "More popular than the Celestial Home Care Omnibus, better selling than Fifty More Things to do in Zero Gravity, and more controversial than Oolon Colluphid's trilogy of philosophical blockbusters Where God Went Wrong, Some More of God's Greatest Mistakes and Who is this God Person Anyway?" },
        ],
    },
];

export const mockGetItems = () => {
    return new Promise<shopItem[]>((resolve) => {
        resolve(mockItemDb);
    });
};

export const mockGetItemById = (itemId: string) => {
    return new Promise<shopItem|undefined>(resolve => {
        resolve(mockItemDb.find(item => item.id === itemId));
    });
};
