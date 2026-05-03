import { Package } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

interface EmptyProductCatalogProps {
  onReset?: () => void;
  title?: string;
  description?: string;
}

export function EmptyProductCatalog({
  onReset,
  title = "No Products Found",
  description = "Try adjusting your search or filter criteria to find what you are looking for.",
}: EmptyProductCatalogProps) {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-900/50">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
        <Package className="h-8 w-8 text-slate-500 dark:text-slate-400" />
      </div>

      <h3 className="mb-2 text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h3>

      <p className="mb-6 max-w-sm text-sm sm:text-base text-slate-600 dark:text-slate-400">
        {description}
      </p>

      {onReset && (
        <Button onClick={onReset} variant="outline" size="sm">
          Reset Filters
        </Button>
      )}
    </div>
  );
}
