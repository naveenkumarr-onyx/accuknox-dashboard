"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const AddWidget = ({
  widgets,
  setWidgets,
  setIsWidgetOpen,
  categoryName,
  wid,
}: any) => {
  const [name, setName] = useState("");
  const [text, setTest] = useState("");
  const [checked, setChecked] = useState(new Array(wid.length).fill(false));

  const handleCheckboxChange: any = (index: any) => {
    setChecked((prev: any) =>
      prev.map((item: any, i: any) => (i === index ? !item : item))
    );
  };

  const handleSave = () => {
    const remainingWidgets = widgets.filter(
      (_: any, index: any) => !checked[index]
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
    <div className="flex flex-col gap-[20px] bg-white h-screen w-[300px] absolute top-0 right-0 py-[80px] px-[20px] ">
      <h1>Add Widget</h1>
      <h1>{categoryName}</h1>
      <ul>
        {wid.map((val: any, index: number) => (
          <div key={index} className="flex gap-1">
            <input
              type="checkbox"
              checked={checked[index]}
              onClick={() => handleCheckboxChange(index)}
            />
            <li>{val.name}</li>
          </div>
        ))}
      </ul>
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
      <div className="flex justify-end gap-3">
        <button
          className=" px-[8px] py-[4px] rounded-md "
          onClick={() => setIsWidgetOpen(false)}>
          cancel
        </button>
        <button
          className="bg-blue-500 px-[8px] py-[4px] rounded-md text-white "
          onClick={handleSave}>
          save
        </button>
      </div>

      <button
        className="absolute top-[15px] right-[15px] text-lg"
        onClick={() => setIsWidgetOpen(false)}>
        <IoMdClose />
      </button>
    </div>
  );
};

export default AddWidget;
