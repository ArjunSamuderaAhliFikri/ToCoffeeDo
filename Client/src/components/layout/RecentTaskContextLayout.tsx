import React, { useState } from "react";
import {
  RecentTaskContext,
  SetRecentTaskContext,
} from "../../context/RecentTaskContext";
import { recentDataTask } from "../../data/recent__task";

type TypeRecentTaskLayout = {
  children: React.ReactNode;
};

interface RecentTask {
  data: {
    id: number;
    title: string;
    description: string;
    isDone: boolean;
    listTask: {
      id: number;
      status: boolean;
      isEdit: boolean;
      task: string;
    }[];
  }[];
}

const RecentTaskContextLayout = (
  props: TypeRecentTaskLayout
): React.JSX.Element => {
  const [recentTask, setRecentTask] =
    useState<RecentTask["data"]>(recentDataTask);
  return (
    <RecentTaskContext.Provider value={recentTask}>
      <SetRecentTaskContext.Provider value={setRecentTask}>
        {props.children}
      </SetRecentTaskContext.Provider>
    </RecentTaskContext.Provider>
  );
};

export default RecentTaskContextLayout;
