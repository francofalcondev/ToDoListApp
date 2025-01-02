import { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  dueDate?: Date;
  priority: "low" | "medium" | "high";
  category:
    | "all"
    | "personal"
    | "finance"
    | "fitness"
    | "shopping"
    | "family"
    | "study"
    | "work";
  archived: boolean;
  completed: boolean;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (
    title: string,
    category:
      | "all"
      | "personal"
      | "finance"
      | "fitness"
      | "shopping"
      | "family"
      | "study"
      | "work",
    priority?: "low" | "medium" | "high",
    description?: string,
    dueDate?: Date,
  ) => void;
  deleteTask: (id: string) => void;
}

export interface TaskProviderProps {
  children: JSX.Element | ReactNode;
}
