import { TaskCategory } from "@/context/TaskContentx/types";

export interface ButtonTabProps {
  title: string;
  isSelected: boolean;
  setFilterSelected: (filter: TaskCategory) => void;
}
