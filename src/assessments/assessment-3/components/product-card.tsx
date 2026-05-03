import { Card } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import type { Product } from "../types";
import { DialogTrigger } from "@/shared/components/ui/dialog";

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: Product["id"]) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <Card className="group h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 pt-0 dark:hover:shadow-primary/10 flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400 dark:text-slate-600">
            <span className="text-sm">No image</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-6">
        {/* Category Badge */}
        <Badge
          variant="outline"
          className="w-fit text-xs sm:text-sm capitalize"
        >
          {product.category}
        </Badge>

        {/* Title */}
        <div className="flex-1">
          <h3
            className="line-clamp-2 text-sm sm:text-lg font-semibold leading-tight text-slate-900 dark:text-slate-50"
            title={product.title}
          >
            {product.title}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {product.rating.rate.toFixed(1)}
            </span>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            ({product.rating.count})
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
          <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
            ${product.price.toFixed(2)}
          </div>
          <Button
            className="w-full sm:w-auto gap-2 text-xs sm:text-sm"
            onClick={() => onViewDetails(product.id)}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Details</span>
            <span className="sm:hidden">View</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
