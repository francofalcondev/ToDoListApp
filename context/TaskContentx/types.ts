import { ReactNode } from "react";

export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  dueDate?: Date;
  priority: "low" | "medium" | "high";
  category: "work" | "personal" | "wishlist" | "sport" | "no category";
  archived: boolean;
  completed: boolean;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (
    title: string,
    category: "work" | "personal" | "wishlist" | "sport" | "no category",
    priority?: "low" | "medium" | "high",
    description?: string,
    dueDate?: Date,
  ) => void;
  deleteTask: (id: string) => void;
}

export interface TaskProviderProps {
  children: JSX.Element | ReactNode;
}
