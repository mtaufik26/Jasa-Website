import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { DesktopIcon, ImageIcon, CodeIcon } from "@radix-ui/react-icons";
import { fadeInUp } from "../../animations/variants";

const iconMap = {
  company: <DesktopIcon className="w-12 h-12 text-gray-900 group-hover:scale-110 transition-transform duration-500" />,
  portfolio: <ImageIcon className="w-12 h-12 text-gray-900 group-hover:scale-110 transition-transform duration-500" />,
  custom: <CodeIcon className="w-12 h-12 text-gray-900 group-hover:scale-110 transition-transform duration-500" />
};

const IllustrationCard = ({ icon, title, description, index, isFeatured = false }) => {
  const { ref, controls } = useInViewAnimation({ amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      custom={index * 0.08}
      whileHover={{ y: -4 }}
      className={`
        relative overflow-hidden group
        border ${isFeatured ? "border-gray-400" : "border-gray-200"} 
        bg-white hover:border-gray-300
        transition-all duration-300 cursor-pointer
        ${isFeatured ? "shadow-md" : "shadow-sm"}
        p-8 sm:p-10 flex flex-col items-center text-center
      `}
    >
      {isFeatured && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4 px-3 py-1 bg-gray-900 text-white text-xs font-medium uppercase tracking-wider"
        >
          Populer
        </motion.span>
      )}

      <div className="w-24 h-24 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-white group-hover:border-gray-200 transition-colors duration-300">
        {iconMap[icon] || <DesktopIcon className="w-12 h-12 text-gray-900" />}
      </div>

      <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-wide group-hover:text-black transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed font-light">
        {description}
      </p>
    </motion.div>
  );
};

export default IllustrationCard;
