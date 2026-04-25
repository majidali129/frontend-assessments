import { Spinner } from "../ui/spinner";

type LoaderProps = {
  message?: string;
};
export const Loader = ({ message }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <Spinner className="h-8 w-8 mx-auto mb-4 text-primary" />
        <p className="text-muted-foreground">{message || "Loading..."}</p>
      </div>
    </div>
  );
};
