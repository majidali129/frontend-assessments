import { SearchInput } from "@/shared/components/search-input";
import { Button } from "@/shared/components/ui/button";
import { Search, X } from "lucide-react";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

export const ProductSearchInput = () => {
  const [query, setQuery] = useState("");
  const [_, setSearchParams] = useSearchParams();
  const [debouncedQuery, setDebouncedQuery] = useDebounceValue("", 300);

  const onQueryChange = (value: string) => {
    setQuery(value);
    setDebouncedQuery(value.trim());
  };

  useEffect(() => {
    setSearchParams((searchParams) => {
      if (debouncedQuery.trim()) {
        searchParams.set("search", debouncedQuery);
      } else {
        searchParams.delete("search");
      }
      return searchParams;
    });
  }, [debouncedQuery]);

  const handleResetQuery = () => {
    setQuery("");
    setDebouncedQuery("");
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-600 pointer-events-none" />
        <SearchInput onChange={onQueryChange} value={query} />
        {query.trim() && (
          <Button
            onClick={handleResetQuery}
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
    </div>
  );
};
