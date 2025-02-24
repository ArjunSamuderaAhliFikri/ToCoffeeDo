import styles from "./cardTask.module.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

interface CardTaskProps {
  idTask: string;
  title: string;
  isComplete: boolean;
  tasks: Array<{ id: string; task: string; isComplete: boolean }>;
  detalTaskData: {
    _id: string;
    title: string;
    isDone: boolean;
    tasks: Array<{ id: string; task: string; isComplete: boolean }>;
  };
  setDetailTaskData: React.Dispatch<
    React.SetStateAction<{
      _id: string;
      title: string;
      isDone: boolean;
      tasks: { id: string; task: string; isComplete: boolean }[];
    }>
  >;
}

const CardTask = (props: CardTaskProps): JSX.Element => {
  const { idTask, title, tasks, detailTaskData, setDetailTaskData } = props;
  const id = detailTaskData._id.toString();

  async function handleDeleteTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const filterTasks = tasks.filter((task) => task.id !== idTask);
    const newDetailTaskData = {
      ...detailTaskData,
      tasks: filterTasks,
    };
    setDetailTaskData(newDetailTaskData);

    try {
      const response = await fetch(`http://localhost:3000/data/${id})}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDetailTaskData),
      });

      const result = await response.json();
      console.log(`Complete from front end : ${result}`);
    } catch (error) {
      console.log(`Error from front end : ${error}`);
    }
  }

  return (
    <>
      <div className={styles.card_task}>
        <InfoTask>
          <span>{title}</span>
        </InfoTask>
        <form
          onSubmit={(event) => handleDeleteTask(event)}
          action={`http://localhost:3000/data/${id}`}
          method="PUT"
          className={styles.wrapper_button_task}
        >
          <button className={styles.complete_button} type="submit">
            complete
          </button>
        </form>
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
