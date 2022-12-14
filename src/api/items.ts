import { shopItem } from '../types';

const mockItemDb:shopItem[] = [
    {
        id: "1",
        name: 'Burnt Toast',
        description: 'Bread that has been cooked slightly to significantly too long',
        quantityRemaining: 3,
        thumbnailUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F02%2F13%2Ffield-image-gettyimages-108047434-2000.jpg',
        avgRating: 0,
        reviews: [
            { rating: 5, text: "A product of superior quality and unparalleled taste. Truly a marvel of the modern kitchen and something every self respecting chef should have displayed. Would be five stars, but there was no warning that the more burnt it becomes the higher the chance it can be used as a weapon. Would recommend." },
            { rating: 5, text: "It's okay" },
        ],
    },
    {
        id: "2",
        name: 'Holy Hand Grenade of Antioch',
        description: 'Once the number three, being the third number, be reached, then lobbest thou thy Holy Hand Grenade of Antioch towards thy foe, who, being naughty in My sight, shall snuff it.',
        thumbnailUrl: 'https://www.hollywoodreporter.com/wp-content/uploads/2019/09/100176_holy_hand_grenade_of_antioch_2_copy.jpg?w=928',
        quantityRemaining: 2,
        avgRating: 0,
        reviews: [{ rating: 2, text: "Right. One... two... five!" }],
    },
    {
        id: "3",
        name: 'Orange Cat',
        description: 'He\'s not for sale',
        thumbnailUrl: 'https://htmlcolorcodes.com/assets/images/colors/orange-color-solid-background-1920x1080.png',
        quantityRemaining: 0,
        avgRating: 0,
        reviews: [{ rating: 5, text: "He's kinda dumb, but he's got the spirit" }],
    },
    {
        id: "4",
        name: 'Guide to the Galaxy',
        description: "Has already supplanted the great Encyclopedia Galactica as the standard repository of all knowledge and wisdom",
        quantityRemaining: 0,
        thumbnailUrl: 'https://images.penguinrandomhouse.com/cover/9781400052929',
        avgRating: 0,
        reviews: [
            { rating: 4, text: "First, it is slightly cheaper; and secondly it has the words DON'T PANIC inscribed in large friendly letters on its cover" },
            { rating: 5, text: "More popular than the Celestial Home Care Omnibus, better selling than Fifty More Things to do in Zero Gravity, and more controversial than Oolon Colluphid's trilogy of philosophical blockbusters Where God Went Wrong, Some More of God's Greatest Mistakes and Who is this God Person Anyway?" },
        ],
    },
    {
        id: "5",
        name: 'Hair Brush',
        description: "You know what this does",
        quantityRemaining: 100,
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Plastic_comb%2C_2015-06-07.jpg',
        avgRating: 0,
        reviews: [
            { rating: 1, text: "Wheeeeeere is my hairbrush?" },
            { rating: 3, text: "I'd use this to brush my hair, IF I HAD ANY!" },
        ],
    },
];

const calcAvgRating = (reviews: shopItem["reviews"]): number => {
    if (!reviews) {
        return 0;
    }

    const ratingSum = reviews?.reduce<number>((runningTotal, review) => runningTotal + review.rating, 0);
    return ratingSum / reviews?.length;
};

export const mockGetItems = () => {
    return new Promise<shopItem[]>((resolve) => {
        resolve(mockItemDb.map(item => ({ ...item, avgRating: calcAvgRating(item?.reviews) })));
    });
};

export const mockGetItemById = (itemId: string) => {
    return new Promise<shopItem|undefined>(resolve => {
        const item = mockItemDb.find(item => item.id === itemId);
        resolve({ ...item, avgRating: calcAvgRating(item?.reviews) });
    });
};
