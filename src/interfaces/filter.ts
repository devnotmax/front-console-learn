export interface FilterOptions {
    searchText: string;
    selectedTechnologies: string[];
    priceRange: {
        min: number;
        max: number;
    };
}