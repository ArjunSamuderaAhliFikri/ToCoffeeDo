import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotLayoutContext } from "../context/withOutLayoutContext";
import ReplyIcon from "@mui/icons-material/Reply";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BrushIcon from "@mui/icons-material/Brush";
import ForumIcon from "@mui/icons-material/Forum";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import styles from "../styles/DetailTaskPage.module.css";

type DetailTaskDataProps = {
  _id: string;
  title: string;
  isDone: boolean;
  tasks: {
    title: string;
    isDone: boolean;
  }[];
};

const DetailTaskPage = (): JSX.Element => {
  const [detailTaskData, setDetailTaskData] = useState<
    DetailTaskDataProps | object
  >({});

  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { notLayout, setNotLayout } = useContext(NotLayoutContext);

  useEffect(() => {
    async function retrieveDataById(id: string) {
      const response = await fetch(`http://localhost:3000/data/${id}`);
      const result = await response.json();

      setDetailTaskData(result);
      console.log(result);
    }
    retrieveDataById(id);

    if (id) {
      setNotLayout(true);
    } else {
      setNotLayout(false);
    }
  }, [id]);

  return (
    <>
      {detailTaskData == undefined ? (
        "undefined"
      ) : (
        <>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              height: "100dvh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <HeaderTask detailTaskData={detailTaskData} />
            <TaskArea
              tasks={detailTaskData.tasks}
              setDetailTaskData={setDetailTaskData}
            />
          </div>
        </>
      )}
    </>
  );
};

function CardTask({
  title,
  isComplete,
  tasks,
  setDetailTaskData,
}): JSX.Element {
  function handleCompleteTask(name: string): void {
    const updateTask = tasks.filter(
      (task: { task: string; isComplete: boolean }) => task.task !== name
    );
    setDetailTaskData((prev) => ({ ...prev, tasks: updateTask }));
  }

  return (
    <>
      <div className={styles.card_task}>
        <div className={styles.info_task}>
          <LocalLibraryIcon fontSize="large" />
          <span>{title}</span>
        </div>
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
}

function TaskArea({ tasks, setDetailTaskData }): JSX.Element {
  return (
    <>
      <section className={styles.container_task_area}>
        <main className={styles.wrapper_tasks}>
          {tasks &&
            tasks.map(
              (task: { task: string; isComplete: boolean }, index: number) => (
                <>
                  <CardTask
                    key={index}
                    title={task.task}
                    tasks={tasks}
                    isComplete={task.isComplete}
                    setDetailTaskData={setDetailTaskData}
                  />
                </>
              )
            )}
        </main>
        <section className={styles.wrapper_chat}></section>
      </section>
    </>
  );
}

function HeaderTask({ detailTaskData }): JSX.Element {
  return (
    <>
      <section className={styles.container_header_task}>
        <div className={styles.hero_image}>
          <img
            className={styles.hero_image}
            src="/img/jungle.jpg"
            alt="hero-image"
          />
        </div>

        <div className={styles.wrapper_content_task}>
          <a href="/todos" className={styles.back_to_page}>
            <ReplyIcon fontSize="medium" sx={{ fill: "#333" }} />
            <span>Back</span>
          </a>

          <h1 className={styles.title_task}>
            {Object.keys(detailTaskData).length > 0 && detailTaskData.title}
          </h1>
          <h2 className={styles.sub_title_task}></h2>

          <div className={styles.detail_task}>
            <h2 className={styles.header_status}>status</h2>

            <div className={styles.wrapper_icon_detail}>
              <AccountTreeIcon />
              <span>on process</span>
            </div>
            <div className={styles.wrapper_icon_detail}>
              <RocketLaunchIcon />
              <span>fast</span>
            </div>
          </div>
        </div>

        <div className={styles.wrapper_search_task}>
          <input type="text" name="" id="" placeholder="Find Task..." />
        </div>

        <div className={styles.wrapper_main_features}>
          <div className={styles.features}>
            <div className={styles.wrapper_icon_features}>
              <ForumIcon sx={{ fill: "#f5f5f5" }} fontSize="large" />
            </div>

            <span>Messages</span>
          </div>
          <div className={styles.features}>
            <div className={styles.wrapper_icon_features}>
              <BrushIcon sx={{ fill: "#f5f5f5" }} fontSize="large" />
            </div>

            <span>Draw</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailTaskPage;
// kamu sekarang adalah seorang software developer yang memiliki pengalaman yang cukup, saya sekarang sedang mengerjakan sebuah projek yang dimana saya ingin membangun sebuah fitur chat di web aplikasi saya, dan kebetulan saya menggunakan react.js sebagai front-end nya, dan express.js sebagai back-end nya, bantu saya untuk membangun fitur chat di web aplikasi saya, apa saja yang harus saya perhatikan, dan library apa yang perlu saya pakai?
