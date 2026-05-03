import { Stats } from "./stats";
import { EmptyResult } from "@/shared/components/empty-result";
import { ErrorMessage } from "@/shared/components/error-message";
import type { ApiStatus } from "@/shared/services/types";
import type { Product } from "../types";
import { getProducts } from "../services/products.api";

import { useEffect, useMemo, useState } from "react";
import { ProductsFilterPannel } from "./products-filter-pannel";
import { ProductSkeletonGrid } from "./product-skeleton";
import { ProductsGrid } from "./products-grid";
import { useSearchParams } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { ProductDetailsCard } from "./product-details-card";

export const ProductDataCenter = () => {
  const [state, setState] = useState<ApiStatus<Product[]>>({
    status: "idle",
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [selectedProductId, setSelectedProductId] = useState<
    Product["id"] | null
  >(null);

  const handleViewDetails = (id: Product["id"]) => {
    setSelectedProductId(id);
  };

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const sortQuery = searchParams.get("sort") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setState({ status: "loading" });
        const result = await getProducts();
        setState({ status: "success", data: result.data });
      } catch (error) {
        setState({
          status: "error",
          error:
            error instanceof Error
              ? error
              : new Error("Failed to fetch products"),
        });
      }
    };

    fetchProducts();
  }, []);

  const products = state.status === "success" ? state.data : [];
  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [products],
  );

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => {
      if (checked) {
        return prev?.includes(category) ? prev : [...(prev || []), category];
      } else {
        return prev?.filter((c) => c !== category);
      }
    });
  };

  let filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  filteredProducts = filteredProducts.sort((a, b) => {
    if (sortQuery === "price-low") {
      return a.price - b.price;
    }

    if (sortQuery === "price-high") {
      return b.price - a.price;
    }

    return a.title.localeCompare(b.title);
  });

  filteredProducts = selectedCategories?.length
    ? filteredProducts.filter((p) => selectedCategories.includes(p.category))
    : filteredProducts;

  const hasProducts = state.status === "success" && filteredProducts.length > 0;
  const isEmpty = state.status === "success" && filteredProducts.length === 0;
  const isLoading = state.status === "loading";
  const isError = state.status === "error";

  const selectedProduct = products.find((p) => p.id === selectedProductId);

  return (
    <section className="py-0 space-y-4">
      <Dialog
        open={!!selectedProductId}
        onOpenChange={(open) => !open && setSelectedProductId(null)}
      >
        {hasProducts && <Stats data={filteredProducts} />}

        <div className="grid gap-4 lg:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3 border hidden lg:block">
            <ProductsFilterPannel
              categories={categories}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          <div className="lg:col-span-9 space-y-6">
            <div className="lg:hidden">
              <ProductsFilterPannel
                categories={categories}
                onCategoryChange={handleCategoryChange}
              />
            </div>

            {isLoading && <ProductSkeletonGrid count={8} />}
            {isError && <ErrorMessage message={state.error.message} />}
            {isEmpty && (
              <EmptyResult message="No products found. Try adjusting your search or filters." />
            )}
            {hasProducts && (
              <ProductsGrid
                products={filteredProducts}
                onViewDetails={handleViewDetails}
              />
            )}

            {selectedProduct && (
              <DialogContent className="w-full max-w-[90vw] lg:max-w-5xl">
                <DialogTitle></DialogTitle>
                <ProductDetailsCard product={selectedProduct} />
              </DialogContent>
            )}
          </div>
        </div>
      </Dialog>
    </section>
  );
};
