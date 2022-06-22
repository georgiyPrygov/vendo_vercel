import React from "react";
import Link from "next/link";
import { SVG } from "../../utils/SVG";
import { Links } from "../MobileSubmenu/types";
import styles from "./MobileSubmenuItem.module.scss";
import { IMobileSubmenuItem } from "./types";
const MobileSubmenuItem = ({
  subCategory = "",
  setSubCategory = () => {},
  col = { name: "", id: "", title: "", links: [] },
}: IMobileSubmenuItem) => {
  return (
    <div className={styles.container__col} key={col.id}>
      <h3
        className={`${styles.container__col__title} ${
          subCategory === col.name ? styles.active : ""
        }`}
        onClick={() => setSubCategory(col.name)}
      >
        {col.title} <SVG.ChevronRightIcon />
      </h3>
      <ul
        className={`${styles.container__subcategories} ${
          subCategory === col.name ? styles.active : ""
        }`}
      >
        {col.links.map((link: Links) => (
          <Link href={link.link} key={link.id}>
            <a>{link.title}</a>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default MobileSubmenuItem;
