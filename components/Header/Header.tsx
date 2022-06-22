import React from 'react';
import Link from "next/link";
import HeroMenu from "../HeroMenu/HeroMenu";
import MainMenu from "../MainMenu/MainMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "../SearchBar/SearchBar";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__content}>
        <div className={styles.Header__content__topLine}>
          <MainMenu />
          <Link href="/">
            <a>
              <img src="logo.svg" alt="logo" width="83px" height="21px" />
            </a>
          </Link>
          <UserMenu />
        </div>
        <SearchBar />
        <HeroMenu />
      </div>
      <div className={styles.Header__mobile}>
        <MobileMenu/>
      </div>
    </div>
  );
};

export default Header;
