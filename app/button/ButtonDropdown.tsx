"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

/*
This is the Button dropdown component here we have tow props "name and list"
In the list need to pass the list of dropdown
<ButtonDropdown name={"button"} list={ButtonDropdownList} />;
*/
function ButtonDropdown({ name, list }: any) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const buttonRef = useRef(null);

  const activeDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleClickOutside = (event: any) => {
    if (!isDropdownActive) {
      return;
    }
    if (!buttonRef.current) {
      return;
    }
    if (!(buttonRef.current as any).contains(event.target)) {
      setIsDropdownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownActive]);

  return (
    <div
      ref={buttonRef}
      onClick={activeDropdown}
      className={`relative flex bg-violet-5 px-[10px] py-[6px] rounded-radius gap-[6px] justify-center items-center text-size-1 text-inverted cursor-pointer ${
        isDropdownActive ? "border-width border-violet-2" : ""
      }`}>
      <span>{name}</span>
      <div
        className={`transition-all duration-[500ms] ${
          isDropdownActive ? "rotate-90" : ""
        }`}>
        <IoIosArrowForward />
      </div>

      <div
        className={`flex flex-col gap-[1px] absolute top-[34px] text-violet-6 rounded-radius transform transition-all duration-[300ms] ease-in-out ${
          isDropdownActive
            ? "bg-violet-1 px-[4px] py-[4px]"
            : "h-0 overflow-hidden"
        }`}>
        {list?.map((value: any) => {
          return (
            <p
              key={value.id}
              className="rounded-radius hover:bg-violet-2 px-[10px] py-[2px]">
              {value.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonDropdown;
