import { SortSelect } from "@/shared/components/sort-select";
import { productSortOptions } from "../data";
import { useState } from "react";
import { useSearchParams } from "react-router";

export const ProductSortSelect = () => {
  const [value, setValue] = useState("");
  const [_, setSearchParams] = useSearchParams();

  const onChange = (newValue: string) => {
    setValue(newValue);
    setSearchParams((searchParams) => {
      if (newValue.trim()) {
        searchParams.set("sort", newValue);
      } else {
        searchParams.delete("sort");
      }
      return searchParams;
    });
  };

  return (
    <SortSelect
      options={productSortOptions}
      className="w-xs! shrink-0!"
      value={value}
      onChange={onChange}
    />
  );
};
