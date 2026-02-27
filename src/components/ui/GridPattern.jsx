import React from "react";

const GridPattern = ({ size = "4rem" }) => {
  return (
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                         linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
        backgroundSize: size,
      }}
    />
  );
};

export default GridPattern;