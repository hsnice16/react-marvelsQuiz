import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  handleThemeToggle: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("marvelsQuizUserTheme") ?? "dark"
  );

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("marvelsQuizUserTheme", newTheme);
  };

  const value = { theme, handleThemeToggle };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
