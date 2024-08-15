import React from "react";

export const Widget = ({ widget }: any) => {
  return (
    <div className="flex flex-col w-full">
      <h4 className=" font-semibold"> {widget.name}</h4>
      <div className="flex h-full w-full justify-center items-center">
        {widget.text !== "" ? widget.text : "No Data Available"}
      </div>
    </div>
  );
};
