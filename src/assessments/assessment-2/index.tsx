import type { ReactNode } from "react";
import { DashboardContentGrid } from "./components/content-grid";
import { Header } from "./components/header";

export const UserDashboard = (): ReactNode => {
  return (
    <>
      <Header />
      <DashboardContentGrid />
    </>
  );
};
