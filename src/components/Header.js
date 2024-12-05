import { MoonIcon, SunIcon } from 'lucide-react';
import React from 'react';

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">PF</span>
        </div>
      </div>

      <nav className="bg-gray-200 dark:bg-gray-700 rounded-full px-6 py-2 flex space-x-4">
        <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
      </nav>

      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleTheme} 
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <a 
          href="#contact" 
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;