import type { ReactNode } from "react";

type TaskMangerFiltersProps = {
  children: ReactNode;
};

export const TaskMangerFilters = ({ children }: TaskMangerFiltersProps) => {
  return <>{children}</>;
};
