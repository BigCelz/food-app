"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
