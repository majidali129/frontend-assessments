import type { Task, TaskStatus } from "@/assessments/assessment-1/types";
import { TaskListItem } from "./task-list-item";

type TaskListProps = {
  tasks: Task[];
  deleteTask: (id: string) => void;
  toggleStatus: (id: string, status: TaskStatus) => void;
};

export const TaskList = ({
  tasks,
  deleteTask,
  toggleStatus,
}: TaskListProps) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleStatus={toggleStatus}
        />
      ))}
    </ul>
  );
};
