import React from 'react';
import Link from "next/link";
import styles from "./MainMenu.module.scss";

const MainMenu = () => {
  return (
    <div className={styles.MainMenu}>
      <select defaultValue="US">
        <option value="US">US</option>
        <option value="PL">PL</option>
      </select>
      <Link href="#">About</Link>
      <Link href="#">Contact</Link>
    </div>
  );
};

export default MainMenu;
