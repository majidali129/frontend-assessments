import { ProductSearchInput } from "./product-search-input";
import { ProductSortSelect } from "./product-sort-select";

export const ProductToolbar = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <ProductSearchInput />
      <ProductSortSelect />
    </div>
  );
};
