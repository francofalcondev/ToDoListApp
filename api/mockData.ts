import { Task } from "@/context";

export const taskMock: Task[] = [
  {
    id: (Date.now() + 1).toString(),
    title: "Buy groceries",
    description: "Purchase fruits, vegetables, and snacks for the week.",
    createdAt: new Date(),
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Dos días a partir de hoy.
    priority: "medium",
    category: "personal",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 2).toString(),
    title: "Finish React Native project",
    description: "Complete the authentication and navigation flows.",
    createdAt: new Date(),
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // Cinco días a partir de hoy.
    priority: "high",
    category: "work",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 3).toString(),
    title: "Call mom",
    description: "Catch up with mom and discuss weekend plans.",
    createdAt: new Date(),
    priority: "low",
    category: "personal",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 4).toString(),
    title: "Read a book",
    description: "Read 20 pages of the new novel.",
    createdAt: new Date(),
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Siete días a partir de hoy.
    priority: "low",
    category: "all",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 5).toString(),
    title: "Clean the house",
    description: "Vacuum, mop floors, and clean windows.",
    createdAt: new Date(),
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // Un día a partir de hoy.
    priority: "medium",
    category: "personal",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 6).toString(),
    title: "Attend team meeting",
    description: "Discuss project updates and next steps.",
    createdAt: new Date(),
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Tres días a partir de hoy.
    priority: "high",
    category: "work",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 7).toString(),
    title: "Go for a run",
    description: "Jog for 30 minutes in the park.",
    createdAt: new Date(),
    priority: "medium",
    category: "fitness",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 8).toString(),
    title: "Plan weekend trip",
    description: "Decide destination, book tickets, and pack essentials.",
    createdAt: new Date(),
    priority: "low",
    category: "personal",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 9).toString(),
    title: "Prepare presentation",
    description: "Finalize slides for Monday's client meeting.",
    createdAt: new Date(),
    dueDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // Cuatro días a partir de hoy.
    priority: "high",
    category: "work",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 10).toString(),
    title: "Water plants",
    description: "Ensure all indoor and outdoor plants are watered.",
    createdAt: new Date(),
    priority: "low",
    category: "personal",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 11).toString(),
    title: "Renew gym membership",
    description: "Check offers and renew for 6 months.",
    createdAt: new Date(),
    priority: "medium",
    category: "finance",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 12).toString(),
    title: "Watch a movie",
    description: "Choose a classic movie and relax.",
    createdAt: new Date(),
    priority: "low",
    category: "finance",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 13).toString(),
    title: "Organize closet",
    description: "Sort clothes and donate unused items.",
    createdAt: new Date(),
    priority: "medium",
    category: "personal",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 14).toString(),
    title: "Book dentist appointment",
    description: "Routine check-up for next week.",
    createdAt: new Date(),
    priority: "high",
    category: "personal",
    archived: false,
    completed: false,
  },
  {
    id: (Date.now() + 15).toString(),
    title: "Write a blog post",
    description: "Draft a post on productivity tips.",
    createdAt: new Date(),
    priority: "medium",
    category: "work",
    archived: false,
    completed: false,
  },
];
