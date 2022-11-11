export interface shopItem {
    id: string
    name: string
    description: string
    quantityRemaining: number
    reviews: review[]
}

interface review {
    rating: number
    text: string
}