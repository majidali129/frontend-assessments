export const EmptyResult = ({ message }: { message: string }) => {
  return (
    <div className="rounded-lg border border-yellow-200 flex-center bg-yellow-50 p-4 min-h-52 dark:border-yellow-900 dark:bg-yellow-950">
      <p className="text-base md:text-xl font-medium text-yellow-800 dark:text-yellow-200">
        {message || "No results found"}
      </p>
    </div>
  );
};
