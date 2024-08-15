"use client";
import React, { useState } from "react";
import { Widget } from "./Widget";
import AddWidget from "./AddWidget";
import { MdDelete } from "react-icons/md";

const Category = ({ name, widgetsOld }: any) => {
  const [widgets, setWidgets]: any = useState(widgetsOld);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleDelete = (index: any) => {
    const newWidgetList = widgets.filter(
      (value: any, currentIndex: any) => index !== currentIndex
    );
    setWidgets(newWidgetList);
  };

  const handleAdd = () => {
    setIsWidgetOpen(true);
  };

  return (
    <div className="px-4 sm:px-8 lg:px-10 flex flex-col">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
        {name}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {widgets?.map((widget: any, widgetIndex: any) => {
          return (
            <div className="relative" key={widgetIndex}>
              <div className="flex p-4 rounded-md bg-white min-h-[150px] sm:min-h-[180px] lg:min-h-[200px]">
                <Widget widget={widget} />
              </div>
              <button
                className="absolute top-2 right-2 text-xl text-red-500"
                onClick={() => handleDelete(widgetIndex)}>
                <MdDelete />
              </button>
            </div>
          );
        })}
        <div className="flex justify-center items-center p-4 rounded-md bg-white min-h-[150px] sm:min-h-[180px] lg:min-h-[200px]">
          <button
            onClick={handleAdd}
            className="text-sm sm:text-base lg:text-lg">
            + Add Widgets
          </button>
        </div>
      </div>
      {isWidgetOpen && (
        <AddWidget
          widgets={widgets}
          setWidgets={setWidgets}
          isWidgetOpen={isWidgetOpen}
          setIsWidgetOpen={setIsWidgetOpen}
          categoryName={name}
          exisitingWidgets={widgets}
        />
      )}
    </div>
  );
};

export default Category;
