import { Button } from "@/components/ui/button";
import { categories } from "@/data/mbtiTests";

interface FilterTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterTabs = ({ selectedCategory, onCategoryChange }: FilterTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={`transition-all ${
            selectedCategory === category 
              ? "btn-hero scale-105" 
              : "hover:border-primary/30 hover:bg-primary/5"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};