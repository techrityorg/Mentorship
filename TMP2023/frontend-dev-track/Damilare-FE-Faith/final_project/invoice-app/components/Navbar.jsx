"use client";
import { useEffect, useState } from "react";
const { useTheme } = require("next-themes");

export const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  
  const {theme, setTheme} = useTheme();
  
  useEffect(() => {
    setMounted(true)
  })

  if (!mounted) return null;

  const isDark = theme === "dark"
  
  return (
    <header>
      <div className="w-full lg:hidden  h-[80px] bg-custom-nav flex items-center justify-end ">
        {/* logo Image  */}
        <img
          src="/logo.png"
          alt=""
          className=" left-0 top-0 h-[80px] absolute "
        />
        <div className="flex items-center justify-center gap-3 pr-5">
          {/* theme toggle  */}

          {isDark ? (
            <div className="cursor-pointer" onClick={() => setTheme("light")}>
              <img src="/icon-sun.svg" alt="sun-icon" />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => setTheme("dark")}>
              <img src="/icon-moon.svg" alt="moon-icon" />{" "}
            </div>
          )}
          {/* separtion line  */}
          <div className="h-[80px] w-[2px] bg-slate-500"></div>
          <img
            src="/image-avatar.jpg"
            alt="profile-image"
            className="object-contain rounded-full h-[50px] "
          />
        </div>
      </div>

      {/* sidebar for decktop view  */}

      <div className=" hidden lg:block">
        <div className="fixed z-40 bg-custom-nav w-[100px] min-h-screen top-0 left-0 flex flex-col items-center justify-end rounded-r-2xl ">
          {/* logo Image  */}
          <img
            src="/logo.png"
            alt=""
            className=" left-0 top-0 h-[80px] w-[100px] absolute "
          />

          <div className="flex flex-col items-center justify-center gap-7 pr-5">
            {/* theme toggle  */}

            {isDark ? (
              <div className="cursor-pointer" onClick={() => setTheme("light")}>
                <img src="/icon-sun.svg" alt="sun-icon" />
              </div>
            ) : (
              <div className="cursor-pointer" onClick={() => setTheme("dark")}>
                <img src="/icon-moon.svg" alt="moon-icon" />{" "}
              </div>
            )}
            {/* separtion line  */}
            <div className="h-[2px] w-[100px] bg-slate-500"></div>
            <img
              src="/image-avatar.jpg"
              alt="profile-image"
              className="object-contain rounded-full h-[50px] "
            />
          </div>
        </div>
      </div>
    </header>
  );
};
