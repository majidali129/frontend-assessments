import { Card } from "@/shared/components/ui/card";
import type { Product } from "../types";
import { Badge } from "@/shared/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { Separator } from "@/shared/components/ui/separator";
import { Button } from "@/shared/components/ui/button";

type ProductDetailsCardProps = {
  product: Product;
};

export const ProductDetailsCard = ({ product }: ProductDetailsCardProps) => {
  return (
    <Card className="border-none outline-0 ring-0">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 pt-2">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-lg bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-400 dark:text-slate-600">
                  <span>No image available</span>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-4">
            {/* Category */}
            <div>
              <Badge
                variant="outline"
                className="capitalize text-xs sm:text-sm"
              >
                {product.category}
              </Badge>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
                {product.title}
              </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(product.rating.rate)
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-300 dark:text-slate-600"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-50">
                  {product.rating.rate.toFixed(1)}
                </span>{" "}
                <span>({product.rating.count} reviews)</span>
              </div>
            </div>

            <Separator className="my-2" />

            {/* Price */}
            <div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-1">
                Price
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="mb-2 text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-50">
                Description
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator className="my-2" />

            {/* Action Button */}
            <Button size="lg" className="w-full gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
