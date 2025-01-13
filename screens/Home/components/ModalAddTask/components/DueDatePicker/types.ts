import { TaskCategory, Taskpriority } from "@/context/TaskContentx/types";
export interface DueDatePickerProps {
  setTaskData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      category: TaskCategory;
      priority: Taskpriority;
      dueDate: Date | undefined;
    }>
  >;
}
