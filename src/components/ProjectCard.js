import React from 'react';

const ProjectCard = ({ title, description, isDarkMode, size = 'small', image }) => {
  const sizeClasses = {
    small: 'h-48',
    tall: 'h-96',
    wide: 'col-span-2 h-48',
    large: 'h-96'
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${isDarkMode
          ? 'bg-gray-800 border-gray-700 text-white'
          : 'bg-gray-100 border-gray-300 text-black'}
        border rounded-lg overflow-hidden
        hover:scale-105 transition-transform duration-300
        shadow-md hover:shadow-xl
      `}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-2/3 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between h-1/3">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm line-clamp-3">{description}</p>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-sm opacity-50">View Project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500 dark:text-gray-400"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;