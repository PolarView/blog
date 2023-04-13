import React from "react";
import styles from "./navbar.module.scss";
import logo from "../../assets/static/logo.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionsWrapper}>
        <ul className={styles.mainSection}>
          <li className={styles.section}>Новости</li>
          <li className={styles.section}>Мнения</li>
          <li className={styles.section}>
            <Image src={logo} width={200} height={30} alt="logo" />
          </li>
          <li className={styles.section}>Переводы</li>
          <li className={styles.section}>О нас</li>
        </ul>
        <div className={styles.addSection}>
          <div className={styles.searchIconContainer}>
            <FaSearch color="yellow" fontSize={24} />
          </div>
          <div className={styles.toggleThemeIconContainer}>
            <BsFillSunFill color="yellow" fontSize={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
