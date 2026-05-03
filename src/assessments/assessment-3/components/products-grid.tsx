import { ProductCard } from "./product-card";
import type { ProductsList, Product } from "../types";

export const ProductsGrid = ({
  products,
  onViewDetails,
}: {
  products: ProductsList;
  onViewDetails: (id: Product["id"]) => void;
}) => {
  return (
    <ul className="grid gap-4 w-full sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </ul>
  );
};
