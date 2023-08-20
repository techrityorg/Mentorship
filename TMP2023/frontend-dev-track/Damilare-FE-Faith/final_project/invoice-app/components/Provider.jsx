"use client";
import { ThemeProvider } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";
import { dataInvoice } from "./data";

export const DataContext = createContext([]);

export const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState(dataInvoice);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
  return (
    <DataContext.Provider value={data}>
      <ThemeProvider>{children}</ThemeProvider>
    </DataContext.Provider>
  );
};
