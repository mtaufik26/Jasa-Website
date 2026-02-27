import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line 
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import TooltipWrapper from "../ui/TooltipWrapper";
import LoadingSpinner from "../ui/LoadingSpinner";
import { fadeInUp } from "../../animations/variants";

const ServiceCard = ({ src, alt, index, isFeatured = false, tooltip }) => {
  const { ref, controls } = useInViewAnimation({ amount: 0.3 });
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <TooltipWrapper content={tooltip || alt}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        custom={index * 0.08}
        whileHover={{ y: -2 }}
        className={`
          border ${isFeatured ? "border-gray-400" : "border-gray-200"} 
          bg-white hover:border-gray-300
          transition-all duration-300 cursor-pointer
          ${isFeatured ? "shadow-md" : "shadow-sm"}
        `}
      >
        <div className="relative group">
          {src && !imageError ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <LoadingSpinner text="Loading..." />
                </div>
              )}
              <img
                src={src}
                alt={alt}
                className={`w-full h-48 sm:h-56 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            <div className="w-full h-48 sm:h-56 lg:h-72 bg-gray-50 flex items-center justify-center">
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
      </motion.div>
    </TooltipWrapper>
  );
};

export default ServiceCard;