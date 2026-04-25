import { Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { Input } from "../ui/input";
import type { User } from "@/assessments/02-user-dashboard/types";
import { UserListCard } from "./user-list-card";
import { UserDetailsCard } from "./user-details-card";
import { Loader } from "./loader";
import { ErrorAlertCard } from "./error-card";
import { EmptyCard } from "./empty-card";
import { Button } from "../ui/button";
import { useUsers } from "./use-users";

export const URL = "https://jsonplaceholder.typicode.com/users";
const LIMIT = 3;
const formateQuery = (q: string) => q.trim().toLowerCase();

export const DashboardContentGrid = () => {
  const [selectedUserId, setSelectedUserId] = useState<User["id"] | null>(null);
  const [query, setquery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersState = useUsers(URL);

  const renderLoader = () =>
    usersState.status === "loading" && <Loader message="Loading Users..." />;
  const renderError = () =>
    usersState.status === "error" && (
      <ErrorAlertCard error={usersState.error} />
    );
  const renderEmptyState = () =>
    usersState.status === "success" &&
    usersState.data.length === 0 && <EmptyCard />;
  const users = usersState.status === "success" ? usersState.data : [];

  const searchedUsers = users.filter((user) =>
    formateQuery(user.name).includes(query),
  );

  const totalPages = Math.ceil(users.length / LIMIT);
  const offset = (currentPage - 1) * LIMIT;
  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;
  const paginationStart = offset;
  const paginationEnd = Math.min(offset + LIMIT, users.length);

  const handlePrev = () => {
    if (!hasPrev) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!hasNext) return;
    setCurrentPage((prev) => prev + 1);
  };

  const paginatedUsers = searchedUsers.slice(paginationStart, paginationEnd);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            value={query}
            onChange={(e) => setquery(e.target.value)}
            type="text"
            placeholder="Search users by name..."
            className="pl-10 h-10"
          />
        </div>

        {renderLoader()}

        {renderError()}

        {renderEmptyState()}

        {users.length > 0 && (
          <div className="space-y-3">
            {paginatedUsers.map((user) => (
              <UserListCard
                isUserSelected={selectedUserId === user.id}
                onUserSelect={(id: User["id"]) => setSelectedUserId(id)}
                key={user.id}
                user={user}
                selectedUser={null}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <p>
            You're seeing {paginationStart + 1} to {paginationEnd} of{" "}
            {searchedUsers.length} users
          </p>
          <div>
            <Button onClick={handlePrev} disabled={!hasPrev}>
              Prev
            </Button>
            <Button onClick={handleNext} disabled={!hasNext}>
              Next
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        {selectedUserId ? (
          <UserDetailsCard
            onUserUnselect={() => setSelectedUserId(null)}
            key={selectedUserId}
            selectedUserId={selectedUserId}
          />
        ) : (
          users.length > 0 && (
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>User Details</CardTitle>
                <CardDescription>
                  Select a user from the list to view details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-8">
                  <p className="text-sm text-muted-foreground text-center">
                    Click on any user to view their complete information
                    including phone, website, and address.
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  );
};
