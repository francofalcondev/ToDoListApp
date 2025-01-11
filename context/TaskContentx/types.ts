import { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  createdAt: Date;
  dueDate?: Date;
  priority: Taskpriority;
  category: TaskCategory;
  archived: boolean;
  completed: boolean;
}

export interface TaskContextType {
  tasks: Task[];
  filterSelected: TaskCategory;
  filteredTask: Task[];
  setFilterSelected: (filter: TaskCategory) => void;
  addTask: (
    title: string,
    category: TaskCategory,
    priority: Taskpriority,
    dueDate?: Date,
  ) => void;
  deleteTask: (id: string) => void;
}

export interface TaskProviderProps {
  children: JSX.Element | ReactNode;
}

export type TaskCategory =
  | "No category"
  | "Personal"
  | "Finance"
  | "Fitness"
  | "Shopping"
  | "Family"
  | "Study"
  | "Work";

export type Taskpriority = "Low" | "Medium" | "High";
