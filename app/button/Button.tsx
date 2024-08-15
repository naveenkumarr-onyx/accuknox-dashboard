import React from "react";
import Normal from "../typography/Normal";
import { TbTrash } from "react-icons/tb";
import { BiEdit, BiSave } from "react-icons/bi";

/**
sample code

<CustomButtonWithOneIcon
  className="border-success-4 text-white bg-green-5"
  content={"Upload"}>
    <BiUpload />
</CustomButtonWithOneIcon>

<CustomButtonWithTwoIcon className="border-success-4 text-white bg-green-5">
  <BiUpload />
  <BiUpload />
</CustomButtonWithTwoIcon>

<Button content={"Login"} />
<DeleteButton text={true} />
<SaveButton text={true} />
<EditButton text={true} />

 */
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

export const DeleteButton = ({ onClick, text }: any) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex gap-[10px] items-center justify-center px-[10px] py-[6px] rounded bg-danger-4 text-red-1 group/icon`}>
      <TbTrash />
      {text ? (
        <Normal content={"Delete"} />
      ) : (
        <div className="absolute right-[-40px] bottom-[-28px] px-[6px] py-[4px] rounded-b rounded-r z-10 group-hover/icon:block hidden bg-neutral-5 text-neutral-1">
          <Normal content={"Delete"} />
        </div>
      )}
    </button>
  );
};

export const SaveButton = ({ onClick, text }: any) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex gap-[10px] items-center justify-center px-[10px] py-[6px] rounded bg-success-4 text-success-1 group/icon`}>
      <BiSave />
      {text ? (
        <Normal content={"Save"} />
      ) : (
        <div className="absolute right-[-40px] bottom-[-28px] px-[6px] py-[4px] rounded-b rounded-r z-10 group-hover/icon:block hidden bg-neutral-5 text-neutral-1">
          <Normal content={"Save"} />
        </div>
      )}
    </button>
  );
};

export const EditButton = ({ onClick, text }: any) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex gap-[10px] items-center justify-center px-[10px] py-[6px] rounded bg-info-4 text-info-1 group/icon`}>
      <BiEdit />
      {text ? (
        <Normal content={"Edit"} />
      ) : (
        <div className="absolute right-[-40px] bottom-[-28px] px-[6px] py-[4px] rounded-b rounded-r z-10 group-hover/icon:block hidden bg-neutral-5 text-neutral-1">
          <Normal content={"Edit"} />
        </div>
      )}
    </button>
  );
};
