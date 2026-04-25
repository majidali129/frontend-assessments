import { Alert, AlertDescription } from "@/shared/components/ui/alert";

export const ErrorAlertCard = ({ error }: { error: string | null }) => {
  return (
    <Alert variant="destructive">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};
