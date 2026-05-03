import type { Product } from "../types";

export const Stats = ({ data }: { data: Array<Product> }) => {
  return (
    <div className="text-sm md:text-lg text-slate-600 dark:text-slate-400">
      Found{" "}
      <span className="font-semibold text-slate-900 dark:text-slate-50">
        {data.length}
      </span>{" "}
      {data.length === 1 ? "product" : "products"}
    </div>
  );
};
