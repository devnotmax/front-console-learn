interface FilterSidebarProps {
    onFilterChange: (filters: { category: string; technology: string; price: string }) => void;
}