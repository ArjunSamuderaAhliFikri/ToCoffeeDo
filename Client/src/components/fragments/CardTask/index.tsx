import styles from "./cardTask.module.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

interface CardTaskProps {
  title: string;
  isComplete: boolean;
  tasks: Array<{ task: string; isComplete: boolean }>;
  setDetailTaskData: React.Dispatch<
    React.SetStateAction<{
      _id: string;
      title: string;
      isDone: boolean;
      tasks: { task: string; isComplete: boolean }[];
    }>
  >;
}

const CardTask = (props: CardTaskProps): JSX.Element => {
  const { title, isComplete, tasks, setDetailTaskData } = props;

  function handleCompleteTask(name: string): void {
    const updateTask = tasks.filter(
      (task: { task: string; isComplete: boolean }) => task.task !== name
    );
    setDetailTaskData((prev) => ({ ...prev, tasks: updateTask }));
  }

  return (
    <>
      <div className={styles.card_task}>
        <InfoTask>
          <span>{title}</span>
        </InfoTask>
        <div className={styles.wrapper_button_task}>
          <button
            disabled={isComplete}
            className={styles.complete_button}
            onClick={() => handleCompleteTask(title)}
            type="button"
          >
            complete
          </button>
        </div>
        <div className={styles.wrapper_icon_image}>
          <img src="/svg/task.svg" alt="image svg" />
        </div>
      </div>
    </>
  );
};

interface InfoTaskProps {
  children: React.ReactNode;
}

function InfoTask(props: InfoTaskProps): JSX.Element {
  const { children } = props;

  return (
    <>
      <div className={styles.info_task}>
        <LocalLibraryIcon fontSize="large" />
        {children}
      </div>
    </>
  );
}

export default CardTask;
