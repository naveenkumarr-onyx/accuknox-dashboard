"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import SearchResults from "../categories/SearchResults";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="bg-white flex justify-between items-center py-2 px-4 md:px-6 lg:px-8 h-16 shadow-sm">
      <div className="flex items-center gap-2">
        <p className="text-[#cad0d3] hidden lg:inline">Home {">"}</p>
        <span className="text-[#224669] font-semibold">Dashboard V2</span>
      </div>
      <div className="relative  max-w-xs lg:max-w-md xl:max-w-lg">
        <CiSearch className="absolute left-3 top-[18px] transform -translate-y-1/2 text-[#b4c4d1]" />
        <input
          id="search"
          name="search"
          type="text"
          value={searchTerm}
          placeholder="Search anything..."
          className="w-[600px] pl-10 bg-transparent border border-[#dfebfc] focus:outline-none py-1 px-2 text-left text-base tracking-wide"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className=" mt-3">
          <SearchResults searchTerm={searchTerm} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <HiOutlineBellAlert className="text-icon text-lg md:text-xl lg:text-2xl" />
        <FaUserCircle className="text-icon text-lg md:text-xl lg:text-2xl" />
        <div className="hidden md:flex flex-col items-end">
          <h1 className="text-accent text-sm md:text-base">Administrator</h1>
          <p className="text-normal text-xs md:text-sm">Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
