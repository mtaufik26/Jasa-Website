import React from "react";
import KorporatShowcase from "./KorporatShowcase";
import AgencyShowcase from "./AgencyShowcase";

const Showcase = ({ index = 0, initialIndex = 0 }) => {
  if (index === 0) {
    return <KorporatShowcase initialIndex={initialIndex} />;
  }
  if (index === 1) {
    return <AgencyShowcase />;
  }
  return null;
};

export default Showcase;