import CardTask from "../../fragments/CardTask";
import styles from "./taskArea.module.css";

type TaskAreaProps = {
  _id: string;
  tasks: {
    id: string;
    task: string;
    isComplete: boolean;
  }[];
  //set state
  setDetailTaskData: React.Dispatch<
    React.SetStateAction<{
      _id: string;
      title: string;
      isDone: boolean;
      tasks: { id: string; task: string; isComplete: boolean }[];
    }>
  >;
};

const TaskArea = (props: TaskAreaProps): JSX.Element => {
  const { tasks, detailTaskData, setDetailTaskData } = props;
  return (
    <>
      <section className={styles.container_task_area}>
        <main className={styles.wrapper_tasks}>
          {tasks &&
            tasks.map(
              (task: { id: string; task: string; isComplete: boolean }) => (
                <main>
                  <CardTask
                    idTask={task.id}
                    title={task.task}
                    tasks={tasks}
                    isComplete={task.isComplete}
                    detailTaskData={detailTaskData}
                    setDetailTaskData={setDetailTaskData}
                  />
                </main>
              )
            )}
        </main>
        <section className={styles.wrapper_chat}></section>
      </section>
    </>
  );
};

export default TaskArea;
