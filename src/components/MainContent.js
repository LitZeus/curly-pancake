import React from 'react';
import ProjectCard from './ProjectCard';

const MainContent = ({ isDarkMode }) => {
  return (
    <main className="pt-24 px-8 flex justify-center">
      <div className="grid grid-cols-12 gap-4 max-w-7xl w-full">
        {/* First Column (Leftmost cards) */}
        <div className="col-span-3 space-y-4">
          <ProjectCard
            title="Sunset Love"
            description="Nina Young"
            isDarkMode={isDarkMode}
            size="small"
            image="/sunset-love.png"
          />
          <ProjectCard
            title="X"
            description=""
            isDarkMode={isDarkMode}
            size="small"
            image="/x-icon.png"
          />
          <ProjectCard
            title="POWYIWKA"
            description="TikTok viral lowkey"
            isDarkMode={isDarkMode}
            size="tall" // Adjusted to be tall
            image="/powyiwka.png"
          />
        </div>

        {/* Second Column (Centered with large cards) */}
        <div className="col-span-6 space-y-4">
          <ProjectCard
            title="I'm Bart"
            description="Software engineer building products to help people lead better lives. In love with creative solutions - constantly learning and discovering new stuff."
            isDarkMode={isDarkMode}
            size="large"
            image="/im-bart.png"
          />
          <ProjectCard
            title="Learning programming"
            description="Easy to start, hard to master"
            isDarkMode={isDarkMode}
            size="large"
            image="/learning-programming.png"
          />
        </div>

        {/* Third Column (Rightmost cards) */}
        <div className="col-span-3 space-y-4">
          <ProjectCard
            title="One place for your web"
            description="A platform that helps you build, launch, and scale your website"
            isDarkMode={isDarkMode}
            size="tall" // Adjusted to be tall
            image="/one-place-for-web.png"
          />
          <ProjectCard
            title="GitHub"
            description=""
            isDarkMode={isDarkMode}
            size="small"
            image="/github-icon.png"
          />
        </div>

        {/* Bottom Row (Last row spanning columns) */}
        <div className="col-span-3 space-y-4">
          <ProjectCard
            title=""
            description="Light/Dark Mode Toggle"
            isDarkMode={isDarkMode}
            size="small"
            image="/light-mode-toggle.png"
          />
        </div>
        <div className="col-span-6 space-y-4">
          <ProjectCard
            title="Subscribe to get my notes, thoughts and many more via email"
            description=""
            isDarkMode={isDarkMode}
            size="wide"
            image="/subscribe.png"
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
