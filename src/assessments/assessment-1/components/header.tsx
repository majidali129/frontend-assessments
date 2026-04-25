import { formateDate } from "@/shared/utils";

export const TaskManagerHeader = () => {
  return (
    <header className="flex flex-col content-space text-center">
      <h1 className="opacity-90">Task Manager</h1>
      <p className="text-body-large font-semibold text-muted-foreground">
        {formateDate()}
      </p>
    </header>
  );
};
