import { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  createdAt: Date;
  completed: boolean;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
}

export interface TaskProviderProps {
  children: JSX.Element | ReactNode;
}
