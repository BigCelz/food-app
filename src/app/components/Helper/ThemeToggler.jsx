"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme, systemTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      className="p-2 transition w-10 h-10 rounded-full bg-blue-950 hover:bg-blue-900 dark:bg-white dark:hover:bg-gray-400 flex items-center justify-center flex-col  duration-200"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
        {currentTheme === 'dark' ? (
            <BiSun className="text-white dark:text-black w-7 h-7 cursor-pointer transition-all duration-200 " />
        ): (
            <BiMoon  className="text-white dark:text-black w-7 h-7 cursor-pointer transition-all duration-200" />
        )}
    </button>
  );
};

export default ThemeToggler;
