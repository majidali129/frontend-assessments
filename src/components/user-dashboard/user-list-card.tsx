import { Building2, Mail } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

type UserListCardProps = {
  user: any;
  selectedUser: any | null;
  onUserSelect: (id: number) => void;
  isUserSelected: boolean;
};

export const UserListCard = ({
  user,
  isUserSelected,
  onUserSelect,
}: UserListCardProps) => {
  return (
    <Card
      key={user.id}
      onClick={() => onUserSelect(user.id)}
      className={`cursor-pointer transition-all hover:shadow-md ${isUserSelected ? "ring-1 ring-black" : ""} `}
    >
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {user.name}
            </h3>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                {user.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                {user.company.name}
              </div>
            </div>
          </div>
          {isUserSelected && (
            <Badge variant="default" className="ml-2">
              Selected
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
