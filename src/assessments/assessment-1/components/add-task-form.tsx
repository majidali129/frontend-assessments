import type { Task } from "@/assessments/assessment-1/types";
import { Button } from "@/shared/components/ui//button";
import { Input } from "@/shared/components/ui//input";
import { useState, type ChangeEvent, type SyntheticEvent } from "react";

type AddTaskFormProps = {
  onAddNewTask: (newTask: Task) => void;
};

const initialState = "";

export const AddTaskForm = ({ onAddNewTask }: AddTaskFormProps) => {
  const [title, setTitle] = useState(initialState);
  const [error, setError] = useState<null | string>(null);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
    setTitle(e.target.value);
  };

  const handleReset = () => {
    setTitle(initialState);
    setError(null);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    const Id = `task-${Math.random()}-${title.slice(5)}`;
    onAddNewTask?.({
      id: Id,
      title: title.trim(),
      status: "todo",
    });

    handleReset();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex items-center gap-2 w-full">
        <Input
          value={title}
          onChange={handleTitleChange}
          type="text"
          className={`h-auto py-2.5 text-lg! w-full ${error ? "bg-red-100 border-red-500! " : ""}`}
          placeholder="Add New Task ..."
        />
        <Button type="submit" className="h-auto py-2.5 px-4.5 text-lg!">
          Add Task
        </Button>
      </div>
      {error && (
        <small className="text-red-600 text-lg inline-block mt-1">
          {error}
        </small>
      )}
    </form>
  );
};
