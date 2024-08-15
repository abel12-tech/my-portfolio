import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex overflow-hidden items-center justify-between p-5 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="text-xl font-bold text-gray-900 dark:text-gray-200">Abel Kinfu</div>
      <ul className="flex space-x-6">
        <li className="text-gray-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Home</li>
        <li className="text-gray-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">Projects</li>
        <li className="text-gray-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">About</li>
      </ul>
      <button onClick={toggleTheme} className="p-2 rounded-full">
        {theme === 'light' ? <BsSun className="w-6 h-6 text-yellow-500" /> : <BsMoon className="w-6 h-6 text-blue-500" />}
      </button>
    </motion.nav>
  );
}
