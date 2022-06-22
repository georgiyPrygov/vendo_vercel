import { Submenu } from "../MobileSubmenu/types";

export interface IMobileSubmenuItem {
    subCategory?: string;
    setSubCategory?: (val: string) => void;
    col?: Submenu;
}