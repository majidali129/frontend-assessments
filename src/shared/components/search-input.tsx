import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  className?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
};

export const SearchInput = ({
  className,
  placeholder,
  onChange,
  value,
}: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <Input
      type="text"
      value={value}
      placeholder={placeholder ?? "Search ..."}
      onChange={handleChange}
      className={cn("pl-10 pr-10 h-auto text-lg! py-1.75", className)}
    />
  );
};
