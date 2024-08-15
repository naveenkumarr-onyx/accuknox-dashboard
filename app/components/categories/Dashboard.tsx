"use client";
import React, { useState } from "react";
import { categories } from "./data";
import Categorie from "./Categorie";

const Dashboard = () => {
  return (
    <div className={`flex flex-col gap-10 p-[20px] min-h-screen`}>
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
