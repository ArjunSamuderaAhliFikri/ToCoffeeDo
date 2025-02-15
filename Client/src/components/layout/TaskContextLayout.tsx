import { useState } from "react";
import { TaskContext, SetTaskContext } from "../../context/TaskContext";
type TaskLayoutProps = {
  children: React.ReactNode;
};
interface TaskUser {
  data: {
    id: number;
    title: string;
    description: string;
    timeTask: string;
    isDone?: boolean;
  }[];
}
const TaskContextLayout = (props: TaskLayoutProps): React.JSX.Element => {
  const [tasksUser, setTasksUser] = useState<TaskUser["data"]>([]);
  return (
    <TaskContext.Provider value={tasksUser}>
      <SetTaskContext.Provider value={setTasksUser}>
        {props.children}
      </SetTaskContext.Provider>
    </TaskContext.Provider>
  );
};

export default TaskContextLayout;
