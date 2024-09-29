"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";


export function ModeToggle() {
  const { setTheme,theme } = useTheme();
 

  return (
    <div className="float-end  sticky top-2">
     {theme==='dark'? <button onClick={() => setTheme("light")}>
        <IoSunny size={25} />

      </button>:
      <button onClick={() => setTheme("dark")}>
       <IoMoon size={25} />

      </button>}
    </div>
  );
}
