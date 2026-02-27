import React from "react";

const SectionWrapper = ({ 
  children, 
  className = "", 
  withPattern = true, 
  patternOpacity = 0.1,
  patternSize = "4rem",
  ...props 
}) => {
  
  return (
    <section
      className={`bg-white relative overflow-hidden ${className}`}
      {...props} 
    >
      {withPattern && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                               linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
              backgroundSize: patternSize,
              opacity: patternOpacity,
            }}
          />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default SectionWrapper;