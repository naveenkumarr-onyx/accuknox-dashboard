"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddWidget = ({ widgets, setWidgets, setIsWidgetOpen }: any) => {
  const [name, setName] = useState("");
  const [text, setTest] = useState("");
  const handleSave = () => {
    const newWidgetList = widgets;
    const newWidget = {
      name: name,
      text: text,
    };
    newWidgetList.push(newWidget);
    setWidgets(newWidgetList);
    setIsWidgetOpen(false);
  };
  return (
    <div className="flex flex-col gap-[20px] bg-white h-screen w-[300px] absolute top-0 right-0 py-[80px] px-[20px] ">
      <input
        className=" px-[8px] py-[4px] border-[#333333] border-[1px] rounded-sm "
        placeholder="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className=" px-[8px] py-[4px] border-[#333333] border-[1px] rounded-sm "
        placeholder="text"
        type="text"
        onChange={(e) => setTest(e.target.value)}
      />
      <button
        className="bg-blue-500 px-[8px] py-[4px] rounded-md text-white "
        onClick={handleSave}>
        save
      </button>
      <button
        className="absolute top-[15px] right-[15px] text-lg"
        onClick={() => setIsWidgetOpen(false)}>
        <IoMdClose />
      </button>
    </div>
  );
};

export default AddWidget;
