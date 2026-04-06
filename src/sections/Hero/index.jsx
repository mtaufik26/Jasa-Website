import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import SectionWrapper from "../../components/layout/SectionWrapper";
import HeroBadges from "./HeroBadges";
import HeroContent from "./HeroContent";
import { subtlePulse } from "../../animations/variants";

const Hero = () => {
  return (
    <SectionWrapper 
      className="relative"
      withPattern={false} 
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px), 
                           linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-100 via-transparent to-gray-100 rounded-full"
          variants={subtlePulse}
          animate="animate"
        />

        <div className="absolute top-20 left-20 w-1 h-1 bg-gray-300 rounded-full" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-300 rounded-full" />
        <div className="absolute top-40 right-40 w-2 h-2 bg-gray-200 rounded-full" />
      </div>

      <div className="absolute inset-0 w-full max-w-7xl mx-auto h-full max-h-[800px] my-auto pointer-events-none z-10">
        <HeroBadges />
      </div>

      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-36 relative z-20">
        <HeroContent />
      </div>
    </SectionWrapper>
  );
};

export default Hero;