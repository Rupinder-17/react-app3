import { useTheme } from "@/hooks/useTheme";
import React from "react";

export const ThemeCheck = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();
  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{ background: isDarkMode ? "pink" : "green", color: isDarkMode ? "red" : "blue" }}
      >
        change theme
      </button>
    </div>
  );
};
