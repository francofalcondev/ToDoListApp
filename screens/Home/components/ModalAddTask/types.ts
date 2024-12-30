import { Dispatch, SetStateAction } from "react";

export interface ModalAddTaskProps {
  isModalAddTaskOpen: boolean;
  setIsModalAddTaskOpen: Dispatch<SetStateAction<boolean>>;
  addTask: (title: string) => void;
}
