import { BuildingIcon, Globe, Mail, MapPin, Phone, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import type { User } from "@/assessments/02-user-dashboard/types";
import { cache } from "./data";

export const UserDetailsCard = ({
  selectedUserId,
  onUserUnselect,
}: {
  selectedUserId: User["id"];
  onUserUnselect: () => void;
}) => {
  const user = cache[selectedUserId] as User;

  if (!user) {
    return null;
  }

  return (
    <Card className="sticky top-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <CardDescription className="mt-1">User ID: {user.id}</CardDescription>
        </div>
        <Button
          onClick={onUserUnselect}
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Contact Information
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  href={`mailto:${user.email}`}
                  className="text-sm font-medium text-foreground hover:text-primary break-all"
                >
                  {user.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a
                  href={`tel:${user.phone}`}
                  className="text-sm font-medium text-foreground hover:text-primary break-all"
                >
                  {user.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Website</p>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary break-all"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Company
          </h4>
          <div className="flex items-start gap-3">
            <BuildingIcon className="h-4 w-4 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {user.company.name}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Address
          </h4>
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-primary mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-foreground">
                {user.address.street}
              </p>
              <p className="text-muted-foreground">{user.address.suite}</p>
              <p className="text-muted-foreground">
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
