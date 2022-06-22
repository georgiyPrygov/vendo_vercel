import React from "react";
import { categories, menus } from "../../mocks/MenusData";
import { SVG } from "../../utils/SVG";
import MobileSubmenu from "../MobileSubmenu/MobileSubmenu";
import styles from "./MobileCategories.module.scss";
import { IMobileCategories } from "./types";
const noop = () => {};
const MobileCategories = ({
  setCurrentCategory = noop,
  currentCategory = "",
  subCategory = "",
  setSubCategory = noop,
  dropCategory = noop,
  dropSubCategory = noop,
}: IMobileCategories) => {
  return (
    <ul className={styles.container__categories}>
      {categories.map((category) => (
        <li key={category.id} className={styles.container__categories__item}>
          <div
            className={`${styles.container__title} ${
              currentCategory ? styles.hidden : ""
            }`}
            onClick={() => setCurrentCategory(category.name)}
          >
            {category.title} <SVG.ChevronRightIcon />
          </div>

          {menus
            .filter((menu) => menu.name === category.name)
            .map((item) => (
              <MobileSubmenu
                key={item.id}
                item={item}
                currentCategory={currentCategory}
                subCategory={subCategory}
                setSubCategory={setSubCategory}
                dropCategory={dropCategory}
                dropSubCategory={dropSubCategory}
              />
            ))}
        </li>
      ))}
    </ul>
  );
};
export default MobileCategories;
