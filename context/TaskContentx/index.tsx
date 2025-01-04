import { createContext, useContext, useState } from "react";
import {
  Task,
  TaskContextType,
  TaskProviderProps,
  TaskCategory,
  Taskpriority,
} from "./types";
import { taskMock } from "@/api/mockData";

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  filterSelected: "all",
  filteredTask: [],
  setFilterSelected: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>(taskMock);
  const [filterSelected, setFilterSelected] = useState<TaskCategory>("all");

  const filteredTask = tasks.filter((task) =>
    filterSelected === "all" ? true : task.category === filterSelected,
  );

  const addTask = (
    title: string,
    category: TaskCategory,
    priority: Taskpriority,
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
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        filteredTask,
        filterSelected,
        setFilterSelected,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};
