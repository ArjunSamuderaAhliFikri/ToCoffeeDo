import React from "react";
import styles from "./main__page.module.css";

interface mainProps {
  children: React.ReactNode;
}

const MainPage = (props: mainProps) => {
  return <main className={styles.main__page}>{props.children}</main>;
};

export default MainPage;
