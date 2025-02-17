import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotLayoutContext } from "../context/withOutLayoutContext";
import TaskArea from "../components/layout/TaskArea";
import HeaderTask from "../components/layout/HeaderTask";
import ContentTask from "../components/fragments/ContentTask";
import TitleTask from "../components/fragments/TitleTask";
import DetailTask from "../components/fragments/DetailTask";

type DetailTaskDataProps = {
  _id: string;
  title: string;
  isDone: boolean;
  tasks: {
    task: string;
    isComplete: boolean;
  }[];
};

const DetailTaskPage = (): JSX.Element => {
  const [detailTaskData, setDetailTaskData] = useState<DetailTaskDataProps>({
    _id: "",
    title: "",
    isDone: false,
    tasks: [],
  });

  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { notLayout, setNotLayout } = useContext(NotLayoutContext);

  useEffect(() => {
    async function retrieveDataById(id: string | undefined) {
      const response = await fetch(`http://localhost:3000/data/${id}`);
      const result = await response.json();

      setDetailTaskData(result);
    }
    retrieveDataById(id);

    if (!id) setNotLayout(false);

    setNotLayout(true);
  }, []);

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
            <HeaderTask>
              <ContentTask>
                <TitleTask detailTaskData={detailTaskData} />
                <DetailTask />
              </ContentTask>
            </HeaderTask>
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

export default DetailTaskPage;
