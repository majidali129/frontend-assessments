import type { Task } from "@/assessments/01-task-manager/types";

export const taskList: Task[] = [
  {
    id: "1",
    title: "Setup project structure in Next.js",
    status: "todo",
  },
  {
    id: "2",
    title: "Implement authentication flow",
    status: "done",
  },
  {
    id: "3",
    title: "Design services page UI",
    status: "todo",
  },
  {
    id: "4",
    title: "Integrate API for tasks management",
    status: "expired",
  },
  {
    id: "5",
    title: "Deploy application to production",
    status: "in-progress",
  },
  {
    id: "6",
    title: "Fix login issue",
    status: "done",
  },
]