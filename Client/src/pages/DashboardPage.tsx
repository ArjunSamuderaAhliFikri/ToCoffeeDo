// import "../styles/Global__Styles.css";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";
import RightTask from "../components/layout/right__task";
import MainPage from "../components/layout/main__page";
import TaskSection from "../components/layout/Task__Section";
import PopupFormTask from "../components/layout/popup__form__task";
import { SetStateAction, useContext, useRef, useState } from "react";
import ProfileUser from "../components/layout/profile__user";
import { SetTaskContext, TaskContext } from "../context/TaskContext";
import AppShell from "../components/layout/AppShell";
import WrapDashboard from "../components/layout/WrapDashboard";

// interface TaskUser {
//   data: {
//     id: number;
//     title: string;
//     description: string;
//     timeTask: string;
//     isDone?: boolean;
//   }[];
// }

const App = (): JSX.Element => {
  // const [tasksUser, setTasksUser] = useState<TaskUser["data"]>([]);
  const tasksUser = useContext(TaskContext);
  const setTasksUser = useContext(SetTaskContext);
  const [textTitleTask, setTextTitleTask] = useState<string>("");
  const [textDescriptionTask, setTextDescriptionTask] = useState<string>("");
  const [firstClockTask, setFirstClockTask] = useState<string>("");
  const [secondClockTask, setSecondClockTask] = useState<string>("");

  const idTask = useRef<any>(1);
  const popupFormTaskElement = useRef<any>();

  const handleAddActivity = (): void => {
    popupFormTaskElement.current.style.display = "block";
  };

  const handleCloseAddForm = (): void => {
    popupFormTaskElement.current.style.display = "none";
  };

  const handleChangeTextTitleTask = (event: {
    target: { value: SetStateAction<string> };
  }): void => {
    setTextTitleTask(event.target.value);
  };

  const handleChangeDescriptionTask = (event: {
    target: { value: SetStateAction<string> };
  }): void => {
    setTextDescriptionTask(event.target.value);
  };

  const handleClockFirst = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFirstClockTask(event.target.value);
  };

  const handleClockSecond = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSecondClockTask(event.target.value);
  };

  const determineBeforeNoonStart = (time: any): string => {
    if (
      parseInt(time.split("").slice(0, 2).join("")) > 0 &&
      parseInt(time.split("").slice(0, 2).join("")) < 12
    ) {
      return "am";
    } else {
      return "pm";
    }
  };

  const determineAfterNoonEnd = (time: any): string => {
    if (
      parseInt(time.split("").slice(0, 2).join("")) > 12 &&
      parseInt(time.split("").slice(0, 2).join("")) < 24
    ) {
      return "pm";
    } else {
      return "am";
    }
  };

  const handleDeleteRememberTask = (
    id: number,
    event: React.MouseEventHandler<HTMLButtonElement> | any
  ): void => {
    event.stopPropagation();
    setTasksUser(tasksUser.filter((task: any) => task.id !== id));
  };

  const handleChangeCheckbox = (id: number): void => {
    console.log(tasksUser.find((task: any) => task.id == id));
    setTasksUser(
      tasksUser.map((task: any) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleCreateTask = (): void => {
    if (
      !textTitleTask ||
      !textDescriptionTask ||
      !firstClockTask ||
      !secondClockTask
    )
      return;
    setTasksUser([
      {
        id: idTask.current,
        title: textTitleTask,
        description: textDescriptionTask,
        timeTask: `${firstClockTask} ${determineBeforeNoonStart(
          firstClockTask
        )} - ${secondClockTask} ${determineAfterNoonEnd(secondClockTask)}`,
        isDone: false,
      },
      ...tasksUser,
    ]);
    idTask.current = idTask.current + 1;
    popupFormTaskElement.current.style.display = "none";
    setTimeout((): void => {
      setTextTitleTask("");
      setTextDescriptionTask("");
      setFirstClockTask("");
      setSecondClockTask("");
    }, 500);
    console.log(tasksUser);
  };

  return (
    <>
      <WrapDashboard />
    </>
  );
};

export default App;
