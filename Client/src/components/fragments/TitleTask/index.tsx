import styles from "./titleTask.module.css";

type TitleTaskProps = {
  title: string;
};

const TitleTask = (props: TitleTaskProps): JSX.Element => {
  const { title } = props;
  return (
    <>
      <h1 className={styles.title_task}>{title != "" && title}</h1>
      <h2 className={styles.sub_title_task}></h2>
    </>
  );
};

export default TitleTask;
