import { useParams } from "react-router-dom";
import { recentDataTask } from "../data/recent__task";
import { SetStateAction, useEffect, useState } from "react";
// import "../styles/taskPage.css";
import { CurrentTaskPage } from "../types/CurrentTaskPage";
import { ItemOfCurrentTask } from "../types/ItemOfCurrentTask";

const TaskPage = (): false | JSX.Element => {
  const [currentTask, setCurrentTask] = useState<CurrentTaskPage | any>(null);
  const [inputTask, setInputTask] = useState<string>("");
  const [isChecked, setIsChecked] = useState<number>(0);
  const [editTask, setEditTask] = useState<string>("");
  const { id } = useParams();

  const handleChangeInputTask = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputTask(event.target.value);
  };

  const handleSubmitTask = (event: any): void => {
    event.preventDefault();
    if (!inputTask) return;
    if (currentTask !== null) {
      setCurrentTask({
        ...currentTask,
        ...currentTask.listTask.push({
          isEdit: false,
          status: false,
          task: inputTask,
        }),
      });
    }
    setInputTask("");
  };

  useEffect(() => {
    setCurrentTask(recentDataTask.find((data: any) => data.id == id));
  }, []);

  const handleEnableCheckbox = (event: any, task: string): void => {
    event.stopPropagation();
    if (
      currentTask.listTask.find((item: ItemOfCurrentTask) => item.task == task)
    ) {
      const newCurrentTask = currentTask.listTask.map(
        // type data
        (item: ItemOfCurrentTask) =>
          item.task == task ? { ...item, status: !item.status } : item
      );

      setCurrentTask({ ...currentTask, listTask: newCurrentTask });
    }
  };

  const handleDeleteListTask = (task: string): void => {
    if (currentTask != null) {
      setCurrentTask({
        ...currentTask,
        listTask: currentTask.listTask.filter(
          // type data
          (list: ItemOfCurrentTask) => list.task !== task
        ),
      });
    }
  };

  const handleEditTask = (id: number, task: string) => {
    setCurrentTask({
      ...currentTask,
      listTask: currentTask.listTask.map((item: any) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      ),
    });
    setEditTask(task);
  };

  const handleSubmitEditTask = (event: any, id: number) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentTask({
      ...currentTask,
      listTask: currentTask.listTask.map((item: ItemOfCurrentTask) =>
        item.id === id
          ? { ...item, task: editTask, isEdit: !item.isEdit }
          : item
      ),
    });
  };

  useEffect(() => {
    if (currentTask !== null) {
      setIsChecked(
        currentTask.listTask.filter(
          (task: ItemOfCurrentTask) => task.status == true
        ).length
      );
    }
  }, [currentTask]);

  return (
    currentTask != null && (
      <section className="container">
        <div className="wrapper-title">
          <div>
            <h2>{currentTask.title}</h2>
            <p className="current-description">{currentTask.description}</p>
          </div>
          <div className="status-task">
            <span
              style={{
                color:
                  isChecked == 0
                    ? "red"
                    : isChecked <= currentTask.listTask.length / 2
                    ? "orange"
                    : "green",
              }}
            >
              {isChecked}
            </span>{" "}
            /{" "}
            <span style={{ color: "green" }}>
              {currentTask.listTask.length}
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmitTask} className="container-create-task">
          <input
            value={inputTask}
            onChange={handleChangeInputTask}
            type="text"
            placeholder="new task"
            className="input-task"
            maxLength={16}
          />
          <button type="submit">
            <i className="fa-solid fa-plus"></i>
          </button>
        </form>
        <ul className="list-task-container">
          {currentTask.listTask.length > 0 &&
            currentTask.listTask.map((item: ItemOfCurrentTask, id: number) =>
              item.isEdit ? (
                <li key={item.task} className="wrapper-edit-task">
                  <form
                    onSubmit={(event) => handleSubmitEditTask(event, item.id)}
                    className="wrapper-textbox-edit"
                  >
                    <input
                      type="text"
                      value={editTask}
                      onChange={(event: any) => setEditTask(event.target.value)}
                    />
                  </form>
                  <div className="wrapper-button-save">
                    <button
                      onClick={(event) => handleSubmitEditTask(event, item.id)}
                      type="submit"
                    >
                      save
                    </button>
                  </div>
                </li>
              ) : (
                <li key={id}>
                  <div className="container-text-list">
                    <input
                      type="checkbox"
                      checked={item.status}
                      onChange={(event) =>
                        handleEnableCheckbox(event, item.task)
                      }
                    />
                    <span className={`${item.status ? "through" : ""}`}>
                      {item.task}
                    </span>
                  </div>
                  <div className="container-button-list">
                    <button
                      className="button-edit-task button-task"
                      onClick={() => handleEditTask(item.id, item.task)}
                      type="button"
                    >
                      edit
                    </button>
                    <button
                      className="button-delete-task button-task"
                      onClick={() => handleDeleteListTask(item.task)}
                      type="button"
                    >
                      del
                    </button>
                  </div>
                </li>
              )
            )}
        </ul>
      </section>
    )
  );
};
export default TaskPage;
