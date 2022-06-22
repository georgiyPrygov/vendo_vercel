import React from "react";
import Link from "next/link";
import { SVG } from "../../utils/SVG";
import MobileSubmenuItem from "../MobileSubmenuItem/MobileSubmenuItem";
import styles from "./MobileSubmenu.module.scss";
import { Images, IMobileSubmenu, Submenu } from "./types";
const noop = () => {};
const MobileSubmenu = ({
  subCategory = "",
  setSubCategory = noop,
  currentCategory = "",
  dropCategory = noop,
  dropSubCategory = noop,
  item = { name: "", submenus: [], images: [], title: "", id: "" },
}: IMobileSubmenu) => {
  return (
    <div
      className={`${styles.container__submenu} ${
        item.name === currentCategory ? styles.active : ""
      }`}
      key={item.id}
    >
      <h2 className={styles.container__submenu__title} onClick={dropCategory}>
        <SVG.ChevronRightIcon /> {item.title}
      </h2>
      <div className={styles.container__submenu__content}>
        {item.submenus.map((col: Submenu) => (
          <MobileSubmenuItem
            key={col.id}
            col={col}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />
        ))}
        <ul className={styles.container__col__nodropdown}>
          {item.images.map((item: Images) => (
            <li
              className={styles.container__col__nodropdown__item}
              key={item.id}
            >
              <Link href="#">
                <a onClick={() => dropSubCategory()}>
                  <h3 className={`${styles.container__col__title}`}>
                    {item.title}
                  </h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MobileSubmenu;
