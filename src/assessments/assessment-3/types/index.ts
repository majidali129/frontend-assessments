export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type ProductsList = Product[];

export type ProductsSortOption = "price-low" | "price-high" | "a-z";
