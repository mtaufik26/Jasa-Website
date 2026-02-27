import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center"
    >
      <div className="animate-spin w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full mb-4" />
      <p className="text-gray-400 text-sm">{text}</p>
    </motion.div>
  );
};

export default LoadingSpinner;