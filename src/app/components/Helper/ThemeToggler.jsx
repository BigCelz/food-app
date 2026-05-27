"use client";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("system");
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
      ? storedTheme
      : "system";

    setTheme(initialTheme);
    setResolvedTheme(initialTheme === "system" ? systemTheme : initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    const applyTheme = (currentTheme) => {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const effectiveTheme = currentTheme === "system" ? systemTheme : currentTheme;

      document.documentElement.classList.toggle("dark", effectiveTheme === "dark");
      setResolvedTheme(effectiveTheme);
    };

    applyTheme(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (event) => {
      if (theme === "system") {
        const effectiveTheme = event.matches ? "dark" : "light";
        document.documentElement.classList.toggle("dark", effectiveTheme === "dark");
        setResolvedTheme(effectiveTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setResolvedTheme(nextTheme);
  };

  if (!mounted) return null;

  return (
    <button
      className="p-2 transition w-10 h-10 rounded-full bg-blue-950 hover:bg-blue-900 dark:bg-white dark:hover:bg-gray-400 flex items-center justify-center flex-col  duration-200"
      onClick={toggleTheme}
    >
      {resolvedTheme === "dark" ? (
        <BiSun className="text-white dark:text-black w-7 h-7 cursor-pointer transition-all duration-200 " />
      ) : (
        <BiMoon className="text-white dark:text-black w-7 h-7 cursor-pointer transition-all duration-200" />
      )}
    </button>
  );
};

export default ThemeToggler;
