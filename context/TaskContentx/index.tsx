import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Task,
  TaskContextType,
  TaskProviderProps,
  TaskCategory,
  Taskpriority,
} from "./types";

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  filterSelected: "No category",
  filteredTask: [],
  setFilterSelected: () => {},
  addTask: () => {},
  deleteTask: () => {},
});

const STORAGE_KEY = "@tasks";

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterSelected, setFilterSelected] =
    useState<TaskCategory>("No category");

  useEffect(() => {
    const loadTask = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error("Failed to load tasks from storage", error);
      }
    };

    loadTask();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch (error) {
        console.error("Failed to load tasks from storage", error);
      }
    };

    saveTasks();
  }, [tasks]);

  const filteredTask = tasks.filter((task) =>
    filterSelected === "No category" ? true : task.category === filterSelected,
  );

  const addTask = (
    title: string,
    category: TaskCategory,
    priority: Taskpriority,
    dueDate?: Date,
  ) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      category,
      priority,
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
