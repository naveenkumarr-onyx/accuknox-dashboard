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
      className={`flex gap-[10px] items-center justify-center px-[10px] py-[6px] rounded  ${className}`}>
      <span>{children}</span>
      {content ? <Normal content={content} /> : <></>}
    </button>
  );
};

export const Button = ({ content, onClick, className }: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-[10px] py-[6px] rounded bg-accent  ${className}`}>
      <Normal content={content} />
    </button>
  );
};
