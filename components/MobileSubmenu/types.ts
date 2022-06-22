export interface IMobileSubmenu {
    subCategory?: string;
    setSubCategory?: (val:string) => void;
    currentCategory?: string;
    dropCategory?: () => void;
    dropSubCategory?: () => void;
    item?: Menu,
}

export interface Menu {
    title: string;
    name: string;
    id: string | number;
    submenus: Submenu[];
    images: Images[];
}

export interface Submenu {
    id: string | number;
    title: string;
    name: string;
    links: Links[]
}
export interface Links {
    id: string | number;
    title: string;
    link: string;
}
export interface Images {
    id: string | number;
    title: string;
    src: string;
}