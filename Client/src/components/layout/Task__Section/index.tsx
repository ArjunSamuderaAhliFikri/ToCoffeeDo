import React, { useContext, useRef, useState } from "react";
import styles from "./task__section.module.css";
import { SetTaskContext, TaskContext } from "../../../context/TaskContext";
import {
  RecentTaskContext,
  SetRecentTaskContext,
} from "../../../context/RecentTaskContext";

interface TaskSectionProps {
  handleAddActivity: () => void;
  handleDeleteRememberTask: (
    id: number,
    event: React.MouseEventHandler<HTMLButtonElement> | any
  ) => void;
  handleChangeCheckbox: (id: number) => void;
  tasksUser: {
    id: number;
    title: string;
    description: string;
    timeTask: string;
    isDone?: boolean;
  }[];
}

const TaskSection = (props: TaskSectionProps): React.JSX.Element => {
  const recentTask = useContext(RecentTaskContext);
  const setRecentTask = useContext(SetRecentTaskContext);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [recentTaskText, setRecentTaskText] = useState<string>("");
  const checkboxElement = useRef<any>();
  const idRecentTaskRef = useRef<number>(3);
  const tasksUser = useContext(TaskContext);
  const setTasksUser = useContext(SetTaskContext);
  const handleToShowCheckbox = (): void => {
    setIsEdit(!isEdit);
  };

  const handleDeleteCardIsChecked = (): void => {
    if (isEdit) return;
    setTasksUser(props.tasksUser.filter((task) => !task.isDone));
  };

  const handleMoveTaskPage = (id: number): void => {
    window.location.href = `task/${id}`;
  };

  // BUG!
  // BUG!
  // BUG!
  const handleSubmitRecentTask = (event: {
    preventDefault: () => void;
  }): void => {
    event.preventDefault();
    if (!recentTaskText) return;
    setRecentTask([
      {
        id: idRecentTaskRef.current,
        title: recentTaskText,
        description: "lorem sit amet dolor hello world!",
        isDone: false,
        listTask: [{ id: 1, status: false, isEdit: false, task: "Kerjain!" }],
      },
      ...recentTask,
    ]);

    // for id recentTask items..
    idRecentTaskRef.current = idRecentTaskRef.current + 1;
    setRecentTaskText("");
  };
  return (
    <section className={styles.container__task}>
      <div className={styles.top__section__task}>
        <h2 className={styles.header__remember__me}>remember me :</h2>
        <div className={styles.icons__task}>
          <div
            onClick={handleDeleteCardIsChecked}
            className={styles.container__icon__task__delete}
          >
            <i className={`${styles.icon} fa-solid fa-trash`}></i>
          </div>
          <div
            onClick={handleToShowCheckbox}
            className={styles.container__icon__task__edit}
          >
            <i className={`${styles.icon} fa-solid fa-pen-to-square`}></i>
          </div>
          <button
            onClick={props.handleAddActivity}
            className={styles.add__activity__button}
          >
            + add activity
          </button>
        </div>
      </div>

      <div className={styles.remember__task}>
        {tasksUser.length > 0 &&
          tasksUser.map((task: any) => (
            <div
              onClick={() => props.handleChangeCheckbox(task.id)}
              key={task.id}
              className={styles.card}
            >
              <div className={styles.container__checkbox}>
                <input
                  ref={checkboxElement}
                  onChange={() => props.handleChangeCheckbox(task.id)}
                  type="checkbox"
                  checked={task.isDone}
                  hidden={isEdit}
                />
              </div>
              <div className={styles.description__card}>
                <h1 className={styles.header}>
                  {task.title.split(" ")[0].substring(0, 12)} <br />{" "}
                  <span>
                    {task.title.split(" ").slice(1).join(" ").length > 9
                      ? task.title.split(" ").slice(1).join(" ").substring(0, 9)
                      : task.title.split(" ").slice(1).join(" ")}
                    ..
                  </span>
                </h1>
                <p className={styles.description}>{task.description}</p>
              </div>
              <div className={styles.time__task}>
                <i className={`${styles.clock__icon} fa-solid fa-clock`}></i>
                <span>{task.timeTask}</span>
              </div>

              <button
                onClick={(event) =>
                  props.handleDeleteRememberTask(task.id, event)
                }
                className={styles.end__task}
                type="button"
              >
                end task
              </button>
            </div>
          ))}
      </div>

      <div className={styles.recent__task}>
        <h1 className={styles.header}>recent task</h1>
        <div className={styles.wrapper__form__recent__task}>
          <form
            onSubmit={handleSubmitRecentTask}
            className={styles.form__recent__task}
          >
            <input
              value={recentTaskText}
              onChange={(event) => setRecentTaskText(event.target.value)}
              type="text"
              name="create-recent-task"
              id="create-recent-task"
              placeholder="create new task.."
            />
            <label htmlFor="create-recent-task">
              <i
                onClick={() => alert("hello world")}
                className={`${styles.icon__add} fa-solid fa-plus`}
              ></i>
            </label>
          </form>
        </div>
        <div className={styles.container__recent__task}>
          {recentTask.map((task: any) => (
            <div
              key={task.id}
              onClick={() => handleMoveTaskPage(task.id)}
              className={styles.task__default__user}
            >
              <div className={styles.description__recent__task}>
                <h1 className={styles.title}>{task.title}</h1>
                <p className={styles.description}>{task.description}</p>
              </div>
              <div className={styles.container__circle__progress}>
                <div className={styles.circle__progress}>
                  {(task.listTask.filter((list: any) => list.status == true)
                    .length /
                    task.listTask.length) *
                    100}
                  %
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskSection;
