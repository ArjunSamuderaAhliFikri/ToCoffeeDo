import { useContext } from "react";
import styles from "./sidebar.module.css";
import { ShowSidebarContext } from "../../../context/isShowSidebarContext";

const Sidebar = (): JSX.Element => {
  const { isShow, setIsShow } = useContext(ShowSidebarContext);
  return (
    <aside className={`${styles.sidebar} ${!isShow && styles.moveSidebar}`}>
      <div className={styles.container__logo}>
        <i className={`${styles.logo__todo} fa-solid fa-clipboard-check`}></i>
        todo app
      </div>
      <button
        onClick={() => setIsShow((prevState: boolean) => !prevState)}
        type="button"
        className={styles.buttonCloseSidebar}
      >
        <span>X</span>
      </button>
      <ul className={styles.sidebar__menu}>
        <li>
          <i className="fa-solid fa-house-chimney"></i>
          home
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
