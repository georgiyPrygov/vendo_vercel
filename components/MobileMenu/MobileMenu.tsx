import React, { useState } from "react";
import styles from "./MobileMenu.module.scss";
import Link from "next/link";
import { SVG } from "../../utils/SVG";
import UserMenu from "../UserMenu/UserMenu";
import SearchBar from "../SearchBar/SearchBar";
import MobileCategories from "../MobileCategories/MobileCategories";

const MobileMenu = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const [subCategory, setSubCategory] = useState<string>("");

  const setMainCategory = (val: string) => {
    setCurrentCategory(val);
  };

  const setAdditionalCategory = (val: string) => {
    val === subCategory ? setSubCategory("") : setSubCategory(val);
  };
  const dropSubCategory = () => {
    setSubCategory("");
  };

  const dropCategory = () => {
    setCurrentCategory("");
    setSubCategory("");
  };

  const menuToggle = () => setMenuOpened((prev) => !prev);
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
        <MobileCategories
          currentCategory={currentCategory}
          setCurrentCategory={setMainCategory}
          subCategory={subCategory}
          setSubCategory={setAdditionalCategory}
          dropCategory={dropCategory}
          dropSubCategory={dropSubCategory}
        />
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
