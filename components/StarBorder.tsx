import React from "react";

interface StarBorderProps {
  className?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  className = "",
  color = "white",
  speed = "6s",
  children
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div
          className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StarBorder;

