import React, { useState } from "react";
import styles from "./MobileMenu.module.scss";
import { categories, menus } from "../../mocks/MenusData";
import Link from "next/link";
import { SVG } from "../../utils/SVG";
import UserMenu from "../UserMenu/UserMenu";
import SearchBar from "../SearchBar/SearchBar";

const MobileMenu = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");

  const menuToggle = () => setMenuOpened((prev) => !prev);
  const dropCategory = () => {
    setCurrentCategory("");
    setSubCategory("");
  };
  return (
    <div className={styles.container}>
      <div className={styles.container__topLine}>
        <button
          className={styles.container__toggle}
          type="button"
          aria-label="toggle menu"
          onClick={menuToggle}
        >
          {menuOpened ? <SVG.CloseIcon /> : <SVG.BurgerIcon />}
        </button>
        <Link href="/">
          <a>
            <img src="logo.svg" alt="logo" width="83px" height="21px" />
          </a>
        </Link>
        <UserMenu />
      </div>
      <div
        className={`${styles.container__content} ${
          menuOpened ? styles.active : ""
        }`}
      >
        <SearchBar />
        <ul className={styles.container__categories}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={styles.container__categories__item}
            >
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
                  <div
                    className={`${styles.container__submenu} ${
                      item.name === currentCategory ? styles.active : ""
                    }`}
                    key={item.id}
                  >
                    <h2
                      className={styles.container__submenu__title}
                      onClick={dropCategory}
                    >
                      <SVG.ChevronRightIcon /> {item.title}
                    </h2>
                    <div className={styles.container__submenu__content}>
                      {item.submenus.map((col) => (
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
                            {col.links.map((link) => (
                              <Link href={link.link} key={link.id}>
                                <a>{link.title}</a>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <ul className={styles.container__col__nodropdown}>
                        {item.images.map((img) => (
                          <li
                            className={styles.container__col__nodropdown__item}
                            key={img.id}
                          >
                            <Link href="#">
                              <a>
                                <h3
                                  className={`${styles.container__col__title}`}
                                >
                                  {img.title}
                                </h3>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </li>
          ))}
        </ul>
        <ul
          className={`${styles.container__additional} ${
            currentCategory ? styles.hidden : ""
          }`}
        >
          <Link href="#">
            <a>My Profile</a>
          </Link>
          <Link href="#">
            <a>About</a>
          </Link>
          <Link href="#">
            <a>Contact</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
