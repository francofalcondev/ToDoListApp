import { useState } from "react";
import { Task } from "../../types";

export const useTaskManager = () => {
  const taskMock: Task[] = [
    {
      id: Date.now().toString(),
      title: "Buy groceries",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: (Date.now() + 1).toString(),
      title: "Finish React Native project",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: (Date.now() + 2).toString(),
      title: "Call mom",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: (Date.now() + 3).toString(),
      title: "Read a book",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: (Date.now() + 4).toString(),
      title: "Clean the house",
      completed: false,
      createdAt: new Date(),
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(taskMock);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date(),
    };

    setTasks((prevTask) => [...prevTask, newTask]);
  };

  return {
    tasks,
    addTask: handleAddTask,
  };
};
