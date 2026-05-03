import { apiClient } from "@/shared/services/api-client";
import type { Product, ProductsList } from "../types";
import type { ApiResponse } from "@/shared/services/types";

export const getProducts = async (): Promise<ApiResponse<ProductsList>> => {
  const { data } = await apiClient.get<ProductsList>("/products");
  return {
    data,
    message: "Products fetched successfully",
  };
};

export const getProduct = async (id: number): Promise<ApiResponse<Product>> => {
  const { data } = await apiClient.get<Product>(`/products/${id}`);
  return {
    data,
    message: "Product details fetched successfully",
  };
};
