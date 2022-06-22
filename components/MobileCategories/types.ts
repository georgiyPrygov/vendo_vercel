export interface IMobileCategories {
    setCurrentCategory?: (val: string) => void
    currentCategory?: string;
    subCategory?: string;
    setSubCategory?: (val: string) => void;
    dropCategory?: () => void;
    dropSubCategory?: () => void;
}