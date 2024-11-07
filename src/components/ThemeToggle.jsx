import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center space-x-3 ">
      <span className="text-gray-500 dark:text-black">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
      <button
        onClick={toggleTheme}
        className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none ${
          isDarkMode ? "bg-gray-800" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform ${
            isDarkMode ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default ThemeToggle;
