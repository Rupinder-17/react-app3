import React, { createContext, useState } from "react";

 export const MyContext = createContext();
export const ThemeChange = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  const themeChange = {
    theme,
    toggleTheme,
    color: {
      background: theme ? "red" : "white",
      color: theme ? "white" : "red",
    },
  };
  return (
    <MyContext.Provider value={themeChange}>{children}</MyContext.Provider>
  );
};
