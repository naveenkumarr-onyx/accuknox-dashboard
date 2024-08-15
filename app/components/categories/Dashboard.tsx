"use client";
import React, { useState } from "react";
import { categories } from "./data";
import Categorie from "./Categorie";
import { CustomButtonWithOneIcon } from "../button/Button";
import { IoAdd } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { CgMoreVerticalR } from "react-icons/cg";

const Dashboard = () => {
  return (
    <div className={`flex flex-col gap-10 p-[20px] min-h-screen bg-[#f0f5f9]`}>
      <div className="py-[10px] px-[20px] flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-xl font-[700]">CNAPP Dashboard</h1>
          <div className="flex gap-2 justify-center items-center">
            <CustomButtonWithOneIcon
              className=" bg-[#fafafa] border border-[#eaeeee]"
              content={"Add Widget"}>
              <IoAdd />
            </CustomButtonWithOneIcon>
            <CustomButtonWithOneIcon className="bg-[#fafafa] border border-[#eaeeee]">
              <GrPowerReset />
            </CustomButtonWithOneIcon>
            <CustomButtonWithOneIcon className="bg-[#fafafa] border border-[#eaeeee]">
              <CgMoreVerticalR />
            </CustomButtonWithOneIcon>
          </div>
        </div>
      </div>
      {categories.map((value, index) => {
        return (
          <div key={index}>
            <Categorie name={value.name} widgetsOld={value.widgets} />
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
