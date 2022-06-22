import React from 'react';
import { SVG } from "../../utils/SVG";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <input type="text" placeholder="Search" />
      <SVG.SearchIcon />
    </div>
  );
};

export default SearchBar;
