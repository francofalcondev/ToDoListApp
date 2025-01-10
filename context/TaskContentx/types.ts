import { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  description?: string;
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
    description?: string,
    dueDate?: Date,
  ) => void;
  deleteTask: (id: string) => void;
}

export interface TaskProviderProps {
  children: JSX.Element | ReactNode;
}

export type TaskCategory =
  | "No category"
  | "personal"
  | "finance"
  | "fitness"
  | "shopping"
  | "family"
  | "study"
  | "work";

export type Taskpriority = "low" | "medium" | "high";
