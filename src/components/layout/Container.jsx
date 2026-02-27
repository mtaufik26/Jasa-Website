import React from "react";

const Container = ({ children, className = "", as = "div", ...props }) => {
  return React.createElement(
    as,
    {
      className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`,
      ...props
    },
    children
  );
};

export default Container;