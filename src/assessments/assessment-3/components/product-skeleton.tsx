import { Skeleton } from "@/shared/components/ui/skeleton";
import { Card } from "@/shared/components/ui/card";

export function ProductSkeleton() {
  return (
    <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="space-y-4 p-4 sm:p-6">
        {/* Image Skeleton */}
        <Skeleton className="h-48 w-full rounded-lg bg-slate-200 dark:bg-slate-700" />

        {/* Title Skeleton */}
        <Skeleton className="h-5 w-full rounded bg-slate-200 dark:bg-slate-700" />
        <Skeleton className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />

        {/* Rating Skeleton */}
        <Skeleton className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />

        {/* Category Skeleton */}
        <Skeleton className="h-6 w-1/3 rounded-full bg-slate-200 dark:bg-slate-700" />

        {/* Price and Button Skeleton */}
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-6 w-1/3 rounded bg-slate-200 dark:bg-slate-700" />
          <Skeleton className="h-10 w-1/3 rounded-lg bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </Card>
  );
}

export function ProductSkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}
