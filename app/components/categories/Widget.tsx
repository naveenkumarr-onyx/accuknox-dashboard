import React from "react";
import ReactApexChart from "react-apexcharts";
import { IoBarChartOutline } from "react-icons/io5";

export const Widget = ({ widget }: any) => {
  return (
    <div className="flex flex-col w-full">
      <h4 className=" font-semibold"> {widget.name}</h4>
      <div className="flex h-full w-full justify-center items-center">
        {widget.options ? (
          <ReactApexChart
            options={widget.options}
            series={widget.options.series}
            type={widget.type}
            width={300}
          />
        ) : (
          <div className="flex flex-col justify-center items-center">
            <IoBarChartOutline className="text-gray-700 text-3xl opacity-40" />
            {widget.text ? (
              widget.text
            ) : (
              <p className="text-gray-700">No graph data available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
