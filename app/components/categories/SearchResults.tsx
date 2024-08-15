import React from "react";

const SearchResults = ({ filterWidgets }: any) => {
  return (
    <div className="mt-4">
      {filterWidgets.map((widget: any, index: any) => (
        <div key={index} className="mb-2">
          <h2 className="text-base font-semibold">{widget.name}</h2>
          <p className="text-sm text-gray-600">
            Category: {widget.categoryName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
