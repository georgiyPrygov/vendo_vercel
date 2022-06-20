import Link from "next/link";
import { SVG } from "../../utils/SVG";
import styles from "./UserMenu.module.scss";

const UserMenu = () => {
  return (
    <div className={styles.UserMenu}>
      <Link href="#">
        <a className={styles.UserMenu__profile}>
          <SVG.UserIcon />
          My profile
        </a>
      </Link>
      <Link href="#">
        <a>
          <SVG.CartIcon />0{" "}
          <span className={styles.UserMenu__total__items}>Items</span>
          <span className={styles.UserMenu__total}>$0.00</span>
        </a>
      </Link>
    </div>
  );
};

export default UserMenu;
