export interface shopItem {
    id?: string
    name?: string
    description?: string
    thumbnailUrl?: string
    thumbnailAltText?: string
    quantityRemaining?: number
    price?: number
    avgRating?: number
    reviews?: review[]
}

interface review {
    rating: number
    text: string
}
