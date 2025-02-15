import Input from "../../elements/input";
import styles from "./navbar.module.css";

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger__menu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={styles.containerSearch}>
        <Input
          type="text"
          classname={styles.input}
          placeholder="cari tugasmu..."
        />
        <i className={`${styles.iconSearch} fa-solid fa-magnifying-glass`}></i>
      </div>
      <div className={styles.container__notification}>
        <i className={`${styles.notification} fa-regular fa-bell`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
