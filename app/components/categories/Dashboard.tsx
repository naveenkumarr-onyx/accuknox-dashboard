"use client";
import React, { useState } from "react";
import { categories } from "./data";
import Categorie from "./Category";
import { CustomButtonWithOneIcon } from "../button/Button";
import { IoAdd, IoTimerSharp } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { CgMoreVerticalR } from "react-icons/cg";
import Category from "./Category";

const Dashboard = () => {
  return (
    <div className={`flex flex-col p-[20px] min-h-screen bg-[#f0f5f9]`}>
      <div className="py-[10px] px-[20px] flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-lg font-[600]">CNAPP Dashboard</h1>
          <div className="flex gap-2 justify-center items-center">
            <CustomButtonWithOneIcon
              className=" bg-[#fafafa] border border-[#eaeeee] py-3 rounded-md"
              content={"Add Widget +"}></CustomButtonWithOneIcon>
            <CustomButtonWithOneIcon className="bg-[#fafafa] border border-[#eaeeee] py-3 rounded-md">
              <GrPowerReset />
            </CustomButtonWithOneIcon>
            <CustomButtonWithOneIcon className="bg-[#fafafa] border border-[#eaeeee] py-3 rounded-md">
              <CgMoreVerticalR />
            </CustomButtonWithOneIcon>
            <div className=" flex flex-row justify-center items-center border border-[#1b1c82] py-1 px-2 bg-white gap-1 rounded-md">
              <IoTimerSharp className="text-[#1b1c82] text-2xl" />|
              <select
                name="timeline"
                id="timeline"
                className="text-[#1b1c82] focus:outline-none">
                <option value="2days">Last 2 days</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-3 flex flex-col py-[5px]">
        {categories.map((value, index) => {
          return (
            <div key={index}>
              <Category name={value.name} widgetsOld={value.widgets} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
