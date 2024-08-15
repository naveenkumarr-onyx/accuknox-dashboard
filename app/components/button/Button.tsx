import React from "react";
import Normal from "../typography/Normal";

export const CustomButtonWithOneIcon = ({
  content,
  children,
  onClick,
  className,
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-[10px] items-center justify-center px-[10px] py-[6px] rounded border-[1px] border-[#333333] ${className}`}>
      <span>{children}</span>
      {content ? <Normal content={content} /> : <></>}
    </button>
  );
};

export const Button = ({ content, onClick, className }: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-[10px] py-[6px] rounded bg-accent text-neutral-1 bg-blue-500 ${className}`}>
      <Normal content={content} />
    </button>
  );
};
