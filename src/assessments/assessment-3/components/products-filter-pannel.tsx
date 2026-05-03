import { Checkbox } from "@/shared/components/ui/checkbox";
import { FieldSet } from "@/shared/components/ui/field";
import { Label } from "@/shared/components/ui/label";

export const ProductsFilterPannel = ({
  categories,
  onCategoryChange,
}: {
  categories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
}) => {
  const handleCategoryChange = (category: string, checked: boolean) => {
    onCategoryChange(category, checked);
  };
  return (
    <div className="py-5">
      <h3 className="mb-3 px-4 font-semibold text-slate-900 dark:text-slate-50">
        Categories
      </h3>
      <FieldSet className="">
        {categories.map((category) => (
          <div
            key={category}
            className="flex items-center space-x-2 border  py-2 px-4"
          >
            <Checkbox
              id={category}
              onCheckedChange={(checked) =>
                handleCategoryChange(category, !!checked)
              }
            />
            <Label
              htmlFor={category}
              className="font-normal text-base md:text-lg capitalize cursor-pointer"
            >
              {category}
            </Label>
          </div>
        ))}
      </FieldSet>
    </div>
  );
};
