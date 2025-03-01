import { useState } from "react";
import CardTask from "../../fragments/CardTask";
import styles from "./taskArea.module.css";
import AddTaskIcon from "@mui/icons-material/AddTask";

type TaskAreaProps = {
  _id: string;
  tasks: {
    id: string;
    task: string;
    isComplete: boolean;
  }[];
  detailTaskData: {
    _id: string;
    title: string;
    isDone: boolean;
    tasks: {
      id: string;
      task: string;
      isComplete: boolean;
    }[];
  };
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
  const { _id, tasks, detailTaskData, setDetailTaskData } = props;
  const idToString = detailTaskData._id.toString();
  const [addTaskText, setAddTaskText] = useState<string>("");

  async function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (addTaskText == "") return;

    const accessTask = detailTaskData.tasks;
    accessTask.push({
      id: Math.random().toString(),
      task: addTaskText,
      isComplete: false,
    });

    setDetailTaskData((prevState) => ({ ...prevState, tasks: accessTask }));

    setAddTaskText("");
    try {
      await fetch(`http://localhost:3000/data/${idToString}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detailTaskData),
      });
      console.log("Task added successfully!");
    } catch (error) {
      console.log(`Error from front end : ${error}`);
    }
  }

  return (
    <>
      <section className={styles.add_task}>
        <AddTaskIcon />

        <form
          onSubmit={(event) => handleAddTask(event)}
          action={`http://localhost:3000/data/${idToString}`}
          method="PUT"
        >
          <input
            onChange={(event) => setAddTaskText(event.target.value)}
            value={addTaskText}
            type="text"
            placeholder="Add a task"
            className={styles.input_task}
          />
          <button type="submit" className={styles.btn_add_task}>
            Add Task
          </button>
        </form>
      </section>
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
