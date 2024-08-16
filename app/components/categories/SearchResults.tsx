import React from "react";
import { categories } from "./data";

const SearchResults = ({ searchTerm }: any) => {
  if (!searchTerm) return null;

  // Filtered categories based on searchTerm
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.widgets.length > 0);

  if (filteredCategories.length === 0) {
    return (
      <div className=" relative">
        <p className="text-center text-gray-500 absolute top-[30px] left-0 right-0">
          No widgets match your search.
        </p>
      </div>
    );
  }
  return (
    <div className="mt-4 relative flex flex-col items-center">
      {filteredCategories.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="relative flex flex-col gap-3 w-full">
          <div className="absolute left-1/2 transform top-[10px] -translate-x-1/2 px-4 py-4 bg-white rounded-lg shadow-lg w-full">
            {category.widgets.map((widget, widgetIndex) => (
              <div key={widgetIndex} className="py-1">
                {widget.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
