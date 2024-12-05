import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <MainContent isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;