"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button, CustomButtonWithOneIcon } from "../button/Button";

const AddWidget = ({
  widgets,
  setWidgets,
  setIsWidgetOpen,
  categoryName,
  isWidgetOpen,
  exisitingWidgets,
}: any) => {
  const [name, setName] = useState("");
  const [text, setTest] = useState("");
  const [checked, setChecked] = useState(
    new Array(exisitingWidgets.length).fill(true)
  );

  const handleCheckboxChange: any = (index: any) => {
    setChecked((prev: any) =>
      prev.map((item: any, i: any) => (i === index ? !item : item))
    );
  };

  const handleSave = () => {
    const remainingWidgets = widgets.filter(
      (_: any, index: any) => checked[index]
    );

    if (name.trim() || text.trim()) {
      const newWidget = {
        name: name,
        text: text,
      };
      setWidgets([...remainingWidgets, newWidget]);
    } else {
      setWidgets(remainingWidgets);
    }

    setIsWidgetOpen(false);
  };

  return (
    <div
      className={`fixed flex flex-col bg-white h-screen min-w-[300px] sm:w-3/4 lg:w-[10%] xl:w-[25%] top-0 right-0 py-0 px-5 sm:px-8 lg:px-2 overflow-auto transition-transform duration-1000 ${
        isWidgetOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <h1 className="text-[16px] font-[400] bg-[#13157c] min-w-full text-white py-2 px-2">
        Add Widget
      </h1>
      <div className=" flex flex-col px-5 py-2 h-full relative justify-between">
        <div className=" ">
          <h2 className="text-[2px] sm:text-xl mb-4">{categoryName}</h2>
          <ul className="mb-4 flex flex-col gap-2">
            {exisitingWidgets.map((val: any, index: number) => (
              <div key={index} className="flex items-center gap-2 border px-1">
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="w-4 h-4"
                />
                <li className="text-sm sm:text-base">{val.name}</li>
              </div>
            ))}
          </ul>
          <input
            className="px-3 py-2 border w-full border-gray-400 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-3 py-2 border w-full border-gray-400 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Text"
            type="text"
            onChange={(e) => setTest(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-3">
          <Button
            onClick={() => setIsWidgetOpen(false)}
            className="px-4 py-2 rounded-md border border-[#101942] text-gray-700 transition"
            content={"Cancel"}></Button>
          <Button
            onClick={handleSave}
            className="bg-[#101942] px-4 py-2 rounded-md text-white hover:bg-blue-600 transition"
            content={"confirm"}></Button>
        </div>
      </div>
      <CustomButtonWithOneIcon
        onClick={() => setIsWidgetOpen(false)}
        className="absolute top-[10px] right-[15px] text-2xl text-white transition"
        content={<IoMdClose />}></CustomButtonWithOneIcon>
    </div>
  );
};

export default AddWidget;
