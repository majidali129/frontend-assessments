import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowUpDown } from "lucide-react";
import type { SortOption } from "../types";

type SortSelectProps = {
  options: SortOption[];
  className?: string;
  onChange: (value: string) => void;
  value: string;
};

export const SortSelect = ({
  options: sortOptions,
  className,
  onChange,
  value,
}: SortSelectProps) => {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger
        className={`w-full sm:w-auto gap-2 h-auto! text-base py-2.75 max-h-11 ${className}`}
      >
        <ArrowUpDown className="h-4.5 w-4.5" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="start" className="min-w-40">
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <div className="flex items-center gap-2">
              {option.icon}
              {option.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
