export interface ITask {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  dueDate?: Date;
  priority: "low" | "medium" | "high";
  category: "work" | "personal" | "wishlist" | "sport" | "no category";
  archived: boolean;
  completed: boolean;
}
