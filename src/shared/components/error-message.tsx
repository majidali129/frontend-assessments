export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950">
      <p className="text-sm font-medium text-red-800 dark:text-red-200">
        {message ||
          "An error occurred while fetching products. Please try again."}
      </p>
    </div>
  );
};
