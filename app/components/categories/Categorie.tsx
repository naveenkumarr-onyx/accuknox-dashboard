"use client";
import React, { useState } from "react";
import { Widget } from "./Widget";
import AddWidget from "./AddWidget";
import { MdDelete } from "react-icons/md";

const Categorie = ({ name, widgetsOld }: any) => {
  const [widgets, setWidgets]: any = useState(widgetsOld);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleDelete = (index: any) => {
    const newWidgetList = widgets.filter((value: any, currentIndex: any) => {
      return index !== currentIndex;
    });
    setWidgets(newWidgetList);
  };

  const handleAdd = () => {
    setIsWidgetOpen(true);
  };
  return (
    <div>
      <h3 className="text-lg font-semibold mb-5">{name}</h3>
      <div className="grid grid-cols-3 gap-[15px] ">
        {widgets?.map((widget: any, widgetIndex: any) => {
          return (
            <div className="relative" key={widgetIndex}>
              <div className="flex p-[10px] rounded-md bg-gray-200 min-h-[200px]">
                <Widget widget={widget} />
              </div>
              <button
                className="absolute top-[10px] right-[20px] text-xl text-red-500"
                onClick={() => handleDelete(widgetIndex)}>
                <MdDelete />
              </button>
            </div>
          );
        })}
        <div className="flex justify-center items-center p-[10px] rounded-md bg-gray-200 min-h-[200px]">
          <button onClick={() => handleAdd()}>+ Add Widgets</button>
        </div>
      </div>

      {isWidgetOpen ? (
        <AddWidget
          widgets={widgets}
          setWidgets={setWidgets}
          setIsWidgetOpen={setIsWidgetOpen}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Categorie;
