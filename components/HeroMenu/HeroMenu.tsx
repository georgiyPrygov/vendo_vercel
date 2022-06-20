import React from "react";
import styles from "./HeroMenu.module.scss";
import { categories, menus } from "../../mocks/MenusData";
import Link from "next/link";

const HeroMenu = () => {
  return (
    <div className={styles.HeroMenu}>
      <ul className={styles.HeroMenu__categories}>
        {categories.map((category) => (
          <li key={category.id} className={styles.HeroMenu__categories__item}>
            <div className={styles.HeroMenu__title}>{category.title}</div>
            {menus
              .filter((menu) => menu.name === category.name)
              .map((item) => (
                <div className={styles.HeroMenu__submenu} key={item.id}>
                  <div className={styles.HeroMenu__submenu__content}>
                    <h2 className={styles.HeroMenu__submenu__title}>
                      {item.title}
                    </h2>
                    <div className={styles.HeroMenu__columns}>
                      {item.submenus.map((col) => (
                        <div
                          className={styles.HeroMenu__columns__col}
                          key={col.id}
                        >
                          {
                            <h3
                              className={styles.HeroMenu__columns__col__title}
                            >
                              {col.title}
                            </h3>
                          }
                          {col.links.map((link) => (
                            <Link href={link.link} key={link.id}>
                              <a>{link.title}</a>
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div className={styles.HeroMenu__sale}>
                        {item.images.map((img) => (
                          <Link href="#" key={img.id}>
                            <a>
                              <div className={styles.HeroMenu__sale__img}>
                                <img
                                  src={img.src}
                                  height="312px"
                                  width="259px"
                                  alt={img.title}
                                />
                              </div>
                              <h4 className={styles.HeroMenu__sale__subtitle}>
                                {img.title}
                              </h4>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroMenu;
