import React from "react";
import Normal from "../components/typography/Normal";

export const CustomButtonWithOneIcon = ({
  content,
  children,
  onClick,
  className,
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-[10px] items-center justify-center px-[10px] py-[6px] rounded ${className}`}>
      <span>{children}</span>
      {content ? <Normal content={content} /> : <></>}
    </button>
  );
};

export const CustomButtonWithTwoIcon = ({
  content,
  children,
  onClick,
  className,
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`px-[10px] py-[6px] rounded ${className}`}>
      <div className="flex items-center justify-center gap-[10px]">
        <span>{children[0]}</span>
        {content ? <Normal content={content} /> : <></>}
        <span>{children[1]}</span>
      </div>
    </button>
  );
};

export const Button = ({ content, onClick, className }: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-[10px] py-[6px] rounded bg-accent text-neutral-1 ${className}`}>
      <Normal content={content} />
    </button>
  );
};
