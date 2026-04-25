import { Alert, AlertDescription } from "../ui/alert";

export const ErrorAlertCard = ({ error }: { error: string | null }) => {
  return (
    <Alert variant="destructive">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};
