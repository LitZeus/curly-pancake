import {
    Github,
    Instagram,
    Linkedin,
    Twitter
} from 'lucide-react';
import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer 
      className={`
        fixed bottom-0 left-0 right-0 
        p-4 flex justify-center items-center 
        ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}
      `}
    >
      <div className="flex space-x-8">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="hover:text-blue-500 transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;