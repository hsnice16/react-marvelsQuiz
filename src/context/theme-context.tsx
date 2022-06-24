import { MARVELS_QUIZ_USER_THEME } from "utils";
import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  handleThemeToggle: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  handleThemeToggle: () => {},
});

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(MARVELS_QUIZ_USER_THEME) ?? "dark"
  );

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(MARVELS_QUIZ_USER_THEME, newTheme);
  };

  const value = { theme, handleThemeToggle };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
