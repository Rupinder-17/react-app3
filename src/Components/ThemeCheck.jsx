import { useMyTheme } from "@/hooks/useMyTheme";
import { useTheme } from "@/hooks/useTheme";
import React from "react";

export const ThemeCheck = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();
  // const {theme, toggleTheme, colors} = useMyTheme()
  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{ background: isDarkMode ? "pink" : "green", color: isDarkMode? "red" : "blue" }}
      >
        change theme
      </button>
    </div>
  );
};
