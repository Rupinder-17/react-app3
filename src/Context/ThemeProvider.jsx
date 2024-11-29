import React, { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? "#333" : "#fff",
      text: isDarkMode ? "#fff" : "#333",
    },
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
