export interface ProductCardProps {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    // reviews: { rating: number }[];
}

export interface Course {
    id: string;
    thumbnail: string;
    title: string;
    technologies: string[];
    price: number;
    available: boolean;
    rating: number;
}
