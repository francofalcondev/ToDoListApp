import { TaskCategory, Taskpriority } from "@/context/TaskContentx/types";
export interface CategorySelectorProps {
  setTaskData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      category: TaskCategory;
      priority: Taskpriority;
      dueDate: Date | undefined;
    }>
  >;
}
