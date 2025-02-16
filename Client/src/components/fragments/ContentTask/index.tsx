import styles from "./contentTask.module.css";
import ReplyIcon from "@mui/icons-material/Reply";

type ContentTaskProps = {
  children: React.ReactNode;
};

const ContentTask = (props: ContentTaskProps): JSX.Element => {
  const { children } = props;
  return (
    <>
      <div className={styles.wrapper_content_task}>
        <a href="/todos" className={styles.back_to_page}>
          <ReplyIcon fontSize="medium" sx={{ fill: "#333" }} />
          <span>Back</span>
        </a>

        {children}
      </div>
    </>
  );
};

export default ContentTask;
