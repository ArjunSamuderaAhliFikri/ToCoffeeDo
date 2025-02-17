import styles from "./titleTask.module.css";

type TitleTaskProps = {
  _id: string;
  title: string;
  isDone: boolean;
  tasks: { task: string; isComplete: boolean }[];
}[];

const TitleTask = (props: TitleTaskProps): JSX.Element => {
  const { title } = props;
  return (
    <>
      <h1 className={styles.title_task}>{title && title}</h1>
      <h2 className={styles.sub_title_task}></h2>
    </>
  );
};

export default TitleTask;
