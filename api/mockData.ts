import { Task } from "@/context";

export const taskMock: Task[] = [
  {
    id: "344d6eff-5f99-4955-add1-c6d34423c04c",
    title: "Task 1",
    createdAt: new Date("2025-01-08T18:47:35"),
    dueDate: new Date("2025-01-15T18:00:00"), // Fecha de vencimiento
    priority: "Medium",
    category: "Finance",
    archived: true,
    completed: false,
  },
  {
    id: "ee8282c3-d920-4b8a-a267-299ab1da2b85",
    title: "Task 2",
    createdAt: new Date("2025-01-10T10:30:00"),
    dueDate: undefined, // Sin fecha de vencimiento
    priority: "High",
    category: "Personal",
    archived: false,
    completed: false,
  },
  {
    id: "187f4c96-7cb7-4bc0-aaa8-9f94368ff11c",
    title: "Task 3",
    createdAt: new Date("2025-01-09T15:15:00"),
    dueDate: new Date("2025-01-12T12:00:00"), // Fecha de vencimiento
    priority: "Low",
    category: "Work",
    archived: false,
    completed: true,
  },
  {
    id: "f232d4de-8c0e-45e2-91da-c5317a1ff8e8",
    title: "Task 4",
    createdAt: new Date("2025-01-07T08:00:00"),
    dueDate: undefined, // Sin fecha de vencimiento
    priority: "Medium",
    category: "Study",
    archived: true,
    completed: false,
  },
  {
    id: "4bc41b72-8263-4946-9156-8ff93d3313c1",
    title: "Task 5",
    createdAt: new Date("2025-01-06T13:20:00"),
    dueDate: new Date("2025-01-20T16:30:00"), // Fecha de vencimiento
    priority: "High",
    category: "Shopping",
    archived: false,
    completed: true,
  },
  {
    id: "ba8318d5-68de-44a6-82f6-84ff2d36efc2",
    title: "Task 6",
    createdAt: new Date("2025-01-05T20:45:00"),
    dueDate: undefined, // Sin fecha de vencimiento
    priority: "Medium",
    category: "Family",
    archived: true,
    completed: false,
  },
  {
    id: "d77d0c15-624e-4395-bb87-588e4b7d3b6a",
    title: "Task 7",
    createdAt: new Date("2025-01-04T09:30:00"),
    dueDate: new Date("2025-01-09T10:00:00"), // Fecha de vencimiento
    priority: "Low",
    category: "Fitness",
    archived: false,
    completed: true,
  },
  {
    id: "69cc8b0d-60e1-4ec7-a416-c22ae6dfd6e0",
    title: "Task 8",
    createdAt: new Date("2025-01-03T16:00:00"),
    dueDate: undefined, // Sin fecha de vencimiento
    priority: "High",
    category: "No category",
    archived: true,
    completed: false,
  },
  {
    id: "fd01d965-0e3f-43a3-a017-7bdf4297b769",
    title: "Task 9",
    createdAt: new Date("2025-01-02T11:25:00"),
    dueDate: new Date("2025-01-30T18:45:00"), // Fecha de vencimiento
    priority: "Medium",
    category: "Finance",
    archived: false,
    completed: true,
  },
  {
    id: "874b3e07-c128-4a89-a26c-1056e83af0e3",
    title: "Task 10",
    createdAt: new Date("2025-01-01T14:10:00"),
    dueDate: undefined, // Sin fecha de vencimiento
    priority: "Low",
    category: "Personal",
    archived: false,
    completed: false,
  },
];
