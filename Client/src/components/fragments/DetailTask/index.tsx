import styles from "./detailTask.module.css";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const DetailTask = (): JSX.Element => {
  return (
    <>
      <div className={styles.detail_task}>
        <h2 className={styles.header_status}>status</h2>

        <div className={styles.wrapper_icon_detail}>
          <AccountTreeIcon />
          <span>on process</span>
        </div>
        <div className={styles.wrapper_icon_detail}>
          <RocketLaunchIcon />
          <span>fast</span>
        </div>
      </div>
    </>
  );
};

export default DetailTask;
