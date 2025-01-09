export interface CategorySelectorProps {
  setTaskData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      category: string;
      priority: string;
      description: string;
      dueDate: Date | undefined;
    }>
  >;
}
