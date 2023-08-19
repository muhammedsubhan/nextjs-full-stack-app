"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkMode = () => {
  const {mode, toggle} = useContext(ThemeContext);

  return (
    <>
      <div
        className="relative cursor-pointer flex justify-between items-center w-[50px] h-[24px] border-2 border-green-800 rounded-3xl"
        onClick={toggle}
      >
        <div>🌙</div>
        <div>🔆</div>
        <div
          className="w-[20px] h-[19px] bg-green-400 rounded-full absolute"
          style={mode === "light" ? { left: "26px" } : { right: "26px" }}
        />
      </div>
    </>
  );
};

export default DarkMode;
