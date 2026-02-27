import React, { useState } from "react";
import { motion } from "framer-motion";  // eslint-disable-line
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import TooltipWrapper from "../ui/TooltipWrapper";
import LoadingSpinner from "../ui/LoadingSpinner";
import { fadeInUp } from "../../animations/variants";

const WorkflowCard = ({ step, title, description, image, index, tooltip }) => {
  const { ref, controls } = useInViewAnimation({ amount: 0.3 });
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <TooltipWrapper content={tooltip || `${title}: ${description}`}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        custom={index * 0.1}
        className="group relative bg-white p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-default"
      >
        <div className="flex items-start justify-between mb-4">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
            className="text-5xl font-light text-gray-100"
          >
            {step.toString().padStart(2, "0")}
          </motion.span>

          {index < 3 && (
            <div className="hidden lg:block absolute top-12 left-[calc(100%-2rem)] w-12 h-px bg-gray-200" />
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
          className="aspect-video bg-gray-50 mb-4 border border-gray-100 flex items-center justify-center overflow-hidden"
        >
          {image && !imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <LoadingSpinner text="Loading..." />
                </div>
              )}
              <img
                src={image}
                alt={title}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            <div className="text-center">
              <svg
                className="w-12 h-12 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="text-lg font-medium text-gray-900 mb-2 tracking-tight"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="text-gray-500 text-sm leading-relaxed font-light"
        >
          {description}
        </motion.p>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </motion.div>
    </TooltipWrapper>
  );
};

export default WorkflowCard;