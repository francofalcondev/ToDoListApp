import { TaskCategory, Taskpriority } from "@/context/TaskContentx/types";
import { Dispatch, SetStateAction } from "react";

export interface ModalAddTaskProps {
  isModalAddTaskOpen: boolean;
  setIsModalAddTaskOpen: Dispatch<SetStateAction<boolean>>;
  addTask: (
    title: string,
    category: TaskCategory,
    priority: Taskpriority,
    dueDate?: Date,
  ) => void;
}
