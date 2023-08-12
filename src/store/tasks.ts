import { create } from 'zustand';

export type TaskId = string | number;
export type ColumnId = string | number;

export interface Task {
  id: TaskId;
  columnId: ColumnId;
  title: string;
}

type Column = { label: string; id: ColumnId };

interface TasksStore {
  tasks: Record<TaskId, Task>;
  columnsList: Record<ColumnId, Array<TaskId>>;
  addNewTask: (task: Task) => void;
  moveTask: (
    targetTaskId: TaskId,
    fromColumnId: ColumnId,
    toColumnId: ColumnId,
  ) => void;
  updateTask: (task: Task) => void;
}

// To object?
export const COLUMNS: Column[] = [
  {
    id: 0,
    label: 'Todo',
  },
  {
    id: 1,
    label: 'InProgress',
  },
  {
    id: 2,
    label: 'Done',
  },
];

export const useTasksStore = create<TasksStore>((set) => ({
  tasks: {},
  columnsList: Object.fromEntries(COLUMNS.map((column) => [column.id, []])),
  addNewTask: (task) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        [task.id]: { ...task, state: 0 },
      },
      columnsList: {
        ...state.columnsList,
        [task.columnId]: state.columnsList[task.columnId].concat(task.id),
      },
    }));
  },
  moveTask: (targetTaskId, fromColumnId, toColumnId) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        [targetTaskId]: { ...state.tasks[targetTaskId], columnId: toColumnId },
      },
      columnsList: {
        ...state.columnsList,
        [fromColumnId]: state.columnsList[fromColumnId].filter(
          (taskId) => targetTaskId !== taskId,
        ),
        [toColumnId]: state.columnsList[toColumnId].concat(targetTaskId),
      },
    }));
  },
  updateTask(updatedTask) {
    set((state) => ({
      ...state.tasks,
      [updatedTask.id]: updatedTask,
    }));
  },
}));
