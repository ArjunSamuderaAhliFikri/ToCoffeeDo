export type CurrentTaskPage = {
  id: number;
  title: string;
  desription: string;
  isDone: boolean;
  listTask: {
    id: number;
    isEdit: boolean;
    status: boolean;
    task: string;
  }[];
};
