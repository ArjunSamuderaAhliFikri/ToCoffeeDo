// what's different between status & isEdit property of *recentDataTask* ?

// status, expecially for checking list if, that list of task done or no
// isEdit, for change from the list task become edit features

export const recentDataTask = [
  {
    id: 1,
    title: "belanja plastik uti",
    description: "lorem sit amet dolor hello world",
    isDone: false,
    listTask: [
      {
        id: 1,
        isEdit: false,
        status: false,
        task: "plastik ori kecil",
      },
      {
        id: 2,
        isEdit: false,
        status: false,
        task: "plastik pop ice",
      },
      {
        id: 3,
        isEdit: false,
        status: false,
        task: "plastik lorek lorek",
      },
      {
        id: 4,
        isEdit: false,
        status: false,
        task: "blueband batangan",
      },
    ],
  },
  {
    id: 2,
    title: "beli roti dan telur",
    description: "lorem sit amet dolor hello world",
    isDone: false,
    listTask: [
      {
        id: 1,
        isEdit: false,
        status: true,
        task: "telur 1kg",
      },
      {
        id: 2,
        isEdit: false,
        status: false,
        task: "roti tawar",
      },
    ],
  },
];
