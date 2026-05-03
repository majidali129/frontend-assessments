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
  {
    id: "assessment-3",
    title: "Product Explorer",
    path: "/assessment-3/product-explorer",
    element: () => import("./assessment-3"),
  },
];
