import { createContext, useContext, useState } from "react";
import { Task, TaskContextType, TaskProviderProps } from "./types";
import { taskMock } from "@/api/mockData";

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>(taskMock);
  const [tasksFiltered, setTaskFiltered] = useState<
    "all" | "work" | "personal" | "fitnes" | "wishlist"
  >("all");
  const addTask = (
    title: string,
    category: "work" | "personal" | "wishlist" | "sport" | "no category",
    priority: "low" | "medium" | "high" = "low",
    description: string = "",
    dueDate?: Date,
  ) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      category,
      priority,
      description,
      completed: false,
      createdAt: new Date(),
      dueDate: dueDate || undefined,
      archived: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};
