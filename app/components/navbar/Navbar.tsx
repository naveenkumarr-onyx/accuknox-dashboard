"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { categories } from "../categories/data";

const Navbar = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const allWidgets = categories.reduce((acc: any, category: any) => {
  //   return acc.concat(
  //     category.widgets.map((widget: any) => ({
  //       ...widget,
  //       categoryName: category.name,
  //     }))
  //   );
  // }, []);

  // const filterWidgets = () => {
  //   const wid = allWidgets.filter((widget: any) =>
  //     widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   if (!searchTerm) {
  //     return allWidgets;
  //   }
  //   return wid;
  // };

  // const filteredWidgets = filterWidgets();
  return (
    <div className="bg-white flex justify-between items-center py-2 px-4 md:px-6 lg:px-8 h-16 shadow-sm">
      <div className="flex items-center gap-2">
        <p className="text-[#cad0d3] hidden lg:inline">Home {">"}</p>
        <span className="text-[#224669] font-semibold">Dashboard V2</span>
      </div>
      <div className="relative flex-grow max-w-xs lg:max-w-md xl:max-w-lg">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2  text-[#b4c4d1]" />
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search anything..."
          className="w-full pl-10 bg-transparent border border-[#dfebfc] focus:outline-none py-1 px-2"
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4">
        <HiOutlineBellAlert className="text-icon text-lg md:text-xl lg:text-2xl" />
        <FaUserCircle className="text-icon text-lg md:text-xl lg:text-2xl" />
        <div className="hidden md:flex flex-col items-end">
          <h1 className="text-accent text-sm md:text-base">Administrator</h1>
          <p className="text-normal text-xs md:text-sm">Dashboard</p>
        </div>
      </div>
      {/* <div className="mt-4">
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget: any, index: any) => (
            <div key={index} className="mb-2">
              <h2 className="text-base font-semibold">{widget.name}</h2>
              <p className="text-sm text-gray-600">
                Category: {widget.categoryName}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No widgets found.</p>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
