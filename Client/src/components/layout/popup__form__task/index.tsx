import React, { forwardRef } from "react";
import styles from "./popup__form__task.module.css";

interface PopupFormTask {
  textTitleTask?: string;
  textDescriptionTask?: string;
  firstClock: string;
  secondClock: string;
  handleClockFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClockSecond: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseAddForm?: () => void;
  handleCreateTask?: () => any;
  handleChangeTextTitleTask: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleChangeDescriptionTask: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const PopupFormTask = forwardRef(
  (props: PopupFormTask, ref: React.ForwardedRef<any>) => {
    const handleSubmitAddTask = (event: { preventDefault: () => void }) => {
      event.preventDefault();
    };

    return (
      <div ref={ref} className={styles.container__popup__form__task}>
        <h1 className={styles.header}>new task</h1>
        <form onSubmit={handleSubmitAddTask}>
          <input
            value={props.textTitleTask}
            onChange={props.handleChangeTextTitleTask}
            maxLength={16}
            placeholder="Title Task..."
            type="text"
            className={styles.input__text}
          />
          <p className={styles.warning__title}>
            the assignment title must be present!
          </p>
          <textarea
            value={props.textDescriptionTask}
            onChange={props.handleChangeDescriptionTask}
            maxLength={32}
            className={styles.description__task}
            placeholder="Description Task..."
            cols={95}
            rows={8}
          ></textarea>
          <p className={styles.warning__description}>
            the assignment description must be present!
          </p>
          <div className={styles.container__set__time}>
            <div className={styles.start__time__task}>
              <h2>start your task :</h2>
              <input
                onChange={props.handleClockFirst}
                type="time"
                value={props.firstClock}
              />
            </div>
            <div className={styles.end__time__task}>
              <h2>end your task :</h2>
              <input
                onChange={props.handleClockSecond}
                type="time"
                value={props.secondClock}
              />
            </div>
          </div>
          <p className={styles.warning__time__task}>
            the assignment time your task must be present!
          </p>

          <div className={styles.container__button__create__task}>
            <button
              onClick={props.handleCreateTask}
              className={styles.button__create__task}
              type="submit"
            >
              create task
            </button>
          </div>

          <div className={styles.container__button__close__task}>
            <button
              onClick={props.handleCloseAddForm}
              className={styles.button__close__task}
              type="button"
            >
              x
            </button>
          </div>
        </form>
      </div>
    );
  }
);

export default PopupFormTask;
