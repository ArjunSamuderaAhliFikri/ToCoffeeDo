import { useState } from "react";
import styles from "./button.module.css";

interface PropsButton {
  type: "submit" | "reset" | "button";
  children: string;
}
const Button = (props: PropsButton): JSX.Element => {
  const [isDark, setIsDark] = useState<boolean>(false);
  function handleDarkMode(): void {
    setIsDark(!isDark);

    alert(isDark);
  }

  return (
    <button
      className={styles.button}
      onClick={handleDarkMode}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
