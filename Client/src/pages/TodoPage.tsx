import styles from "../styles/TodoPage.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoPage = (): JSX.Element => {
  const [tasksUser, setTasksUser] = useState([]);

  useEffect(() => {
    async function fetchDataTodo() {
      const fetchProcess = await fetch("http://localhost:3000/data");
      const result = await fetchProcess.json();
      if (fetchProcess.ok) {
        setTasksUser(result);
      }
    }

    fetchDataTodo();
  }, []);

  useEffect(() => {
    console.log(tasksUser);
  }, [tasksUser]);

  return (
    <>
      <div className={styles.container_todo_page}>
        <SearchHeader />
        <HeroMenu />

        <Tasks tasksUser={tasksUser} />
      </div>
    </>
  );
};

export default TodoPage;

type CardTaskProps = {
  _id: string;
  title: string;
  isDone: boolean;
  tasks: {
    task: string;
    isComplete: boolean;
  }[];
};

function CardTask(props: CardTaskProps): JSX.Element {
  return (
    <>
      <Link to={`/todos/${props._id}`} className={styles.card_task}>
        <img src="/img/laptop-coding-2.jpg" alt="task image" />

        <div className={styles.info_task}>
          <h1>{props.title}</h1>
          <p>{props.title}</p>
        </div>
      </Link>
    </>
  );
}

type TasksProps = {
  title: string;
  isDone: boolean;
  tasks: {
    task: string;
    isComplete: boolean;
    isDone: boolean;
  }[];
}[];

function Tasks(props: TasksProps): JSX.Element {
  const { tasksUser } = props;

  return (
    <>
      <section className={styles.container_tasks}>
        <h1 className={styles.header_tasks}>my task</h1>

        <ul className={styles.list_option_task}>
          <li>All</li>
          <li>40%</li>
          <li>50%</li>
          <li>complete</li>
        </ul>

        <div className={styles.wrapper_mytasks}>
          {tasksUser != undefined &&
            tasksUser.map((data: any) => (
              <>
                <CardTask
                  _id={data._id}
                  title={data.title}
                  isDone={data.isDone}
                  tasks={data.tasks}
                />
              </>
            ))}
        </div>
      </section>
    </>
  );
}

function HeroMenu(): JSX.Element {
  return (
    <>
      <section className={styles.hero_menu}>
        <div className={styles.header_text_hero}>
          <h1>have a enjoy day!</h1>
          <h4>nice to meet you, happy your today</h4>
          <span className={styles.date_time}>saturday, 20 december 2025</span>
        </div>
        <div className={styles.wrapper_hero_icons}>
          <div className={styles.wrapper_task_image}>
            <img src="/svg/task.svg" alt="task_image" />
          </div>
        </div>
      </section>
    </>
  );
}

function SearchHeader(): JSX.Element {
  return (
    <>
      <section className={styles.header_page}>
        <div className={styles.wrapper_search_bar}>
          <input
            type="text"
            name="search-todo"
            id="search-todo"
            placeholder="Search Your Task..."
          />
        </div>

        <div className={styles.header_features}>
          <div className={styles.wrap_icon}>
            <NotificationsIcon
              className={styles.notification_icon}
              fontSize="medium"
              sx={{ fill: "#fff" }}
            />
          </div>
          <div className={styles.wrap_icon}>
            <DarkModeIcon
              className={styles.notification_icon}
              fontSize="medium"
              sx={{ fill: "#fff" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
