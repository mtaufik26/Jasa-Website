import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line 
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

import LoadingSpinner from "../ui/LoadingSpinner";
import { fadeInUp } from "../../animations/variants";

const ServiceCard = ({ src, alt, index, isFeatured = false, title, description }) => {
  const { ref, controls } = useInViewAnimation({ amount: 0.3 });
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      custom={index * 0.08}
      whileHover={{ y: -4 }}
      className={`
        border overflow-hidden flex flex-col h-full
        ${isFeatured ? "border-gray-400" : "border-gray-200"} 
        bg-white hover:border-gray-300 group
        transition-all duration-300 cursor-pointer
        ${isFeatured ? "shadow-md" : "shadow-sm hover:shadow-md"}
      `}
    >
      <div className="relative overflow-hidden w-full h-48 sm:h-56 lg:h-64 flex-shrink-0">
        {src && !imageError ? (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <LoadingSpinner text="Loading..." />
              </div>
            )}
            <img
              src={src}
              alt={alt || title}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="w-full h-full bg-gray-50 flex items-center justify-center">
            <span className="text-gray-300 text-sm font-medium uppercase tracking-wider">
              No Image
            </span>
          </div>
        )}

        {isFeatured && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-3 right-3 px-2 py-1 bg-gray-900 text-white text-xs font-medium uppercase tracking-wider"
          >
            Populer
          </motion.span>
        )}
      </div>

      {(title || description) && (
        <div className="p-6 sm:p-8 flex-grow flex flex-col">
          {title && (
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 group-hover:text-black transition-colors duration-300">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {description}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;