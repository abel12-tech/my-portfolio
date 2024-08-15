import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg border-b border-gray-200 dark:border-gray-700"
      >
        <div className="text-2xl font-extrabold tracking-tight text-white dark:text-gray-100 font-sans">
          Abel Kinfu
        </div>
        <ul className="flex items-center space-x-8">
          <li className="text-lg font-semibold text-white dark:text-gray-200 hover:text-yellow-300 dark:hover:text-yellow-500 transition-colors">
            Home
          </li>
          <li className="text-lg font-semibold text-white dark:text-gray-200 hover:text-yellow-300 dark:hover:text-yellow-500 transition-colors">
            Projects
          </li>
          <li className="text-lg font-semibold text-white dark:text-gray-200 hover:text-yellow-300 dark:hover:text-yellow-500 transition-colors">
            About
          </li>
        </ul>
      </motion.nav>

      <button
        onClick={toggleTheme}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full shadow-lg z-20"
      >
        {theme === "light" ? (
          <BsSun className="w-6 h-6 text-yellow-500" />
        ) : (
          <BsMoon className="w-6 h-6 text-blue-500" />
        )}
      </button>
    </>
  );
}
