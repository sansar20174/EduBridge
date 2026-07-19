import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  return localStorage.getItem("theme") || "light";
};

export const ThemeProvider = ({ children }) => {
  // Load saved theme or default to light
  const [theme, setTheme] = useState(getStoredTheme);

  // Apply theme whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => {
  return useContext(ThemeContext);
};