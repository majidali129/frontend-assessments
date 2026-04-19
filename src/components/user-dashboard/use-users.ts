import type { FetchState, User } from "@/assessments/02-user-dashboard/types";
import { useEffect, useState } from "react";
import { cache } from "./data";

export const useUsers = (url: string) => {
  const [status, setStatus] = useState<FetchState>({ status: "idle" });

  useEffect(() => {
    const fetchUsers = async () => {
      setStatus({ status: "loading" });
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.statusText}`);
        }

        const apiData: User[] = await response.json();
        setStatus({ status: "success", data: apiData });

        for (const user of apiData) {
          cache[user.id] = user;
        }
      } catch (error) {
        setStatus({
          status: "error",
          error:
            error instanceof Error
              ? error.message
              : "Error occurred while fetching users",
        });
      }
    };

    fetchUsers();
  }, [url]);

  return status;
};
