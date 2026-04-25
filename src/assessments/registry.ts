export const assessments = [
  {
    id: "assessment-1",
    title: "Task Manager",
    path: "/assessment-1/task-manager",
    element: () => import("./assessment-1"),
  },
  {
    id: "assessment-2",
    title: "User Dashboard",
    path: "/assessment-2/user-dashboard",
    element: () => import("./assessment-2"),
  },
];
