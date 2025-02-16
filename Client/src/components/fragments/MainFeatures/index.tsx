import styles from "./mainFeatures.module.css";
import BrushIcon from "@mui/icons-material/Brush";
import ForumIcon from "@mui/icons-material/Forum";

const MainFeatures = (): JSX.Element => {
  return (
    <>
      <div className={styles.wrapper_main_features}>
        <div className={styles.features}>
          <div className={styles.wrapper_icon_features}>
            <ForumIcon sx={{ fill: "#f5f5f5" }} fontSize="large" />
          </div>
          tu
          <span>Messages</span>
        </div>
        <div className={styles.features}>
          <div className={styles.wrapper_icon_features}>
            <BrushIcon sx={{ fill: "#f5f5f5" }} fontSize="large" />
          </div>

          <span>Draw</span>
        </div>
      </div>
    </>
  );
};

export default MainFeatures;
