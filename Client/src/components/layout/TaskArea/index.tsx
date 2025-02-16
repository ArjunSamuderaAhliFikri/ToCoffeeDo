import CardTask from "../../fragments/CardTask";
import styles from "./taskArea.module.css";

type TaskAreaProps = {
  tasks: {
    task: string;
    isComplete: boolean;
  }[];
  //set state
  setDetailTaskData: React.Dispatch<
    React.SetStateAction<{
      _id: string;
      title: string;
      isDone: boolean;
      tasks: { task: string; isComplete: boolean }[];
    }>
  >;
};

const TaskArea = (props: TaskAreaProps): JSX.Element => {
  const { tasks, setDetailTaskData } = props;
  return (
    <>
      <section className={styles.container_task_area}>
        <main className={styles.wrapper_tasks}>
          {tasks &&
            tasks.map((task: { task: string; isComplete: boolean }) => (
              <main>
                <CardTask
                  title={task.task}
                  tasks={tasks}
                  isComplete={task.isComplete}
                  setDetailTaskData={setDetailTaskData}
                />
              </main>
            ))}
        </main>
        <section className={styles.wrapper_chat}></section>
      </section>
    </>
  );
};

export default TaskArea;
