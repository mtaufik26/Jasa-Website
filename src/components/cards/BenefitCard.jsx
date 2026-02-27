import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { fadeInUp } from "../../animations/variants";

const symbols = ["◈", "◊", "○", "□", "△", "▽"];

const BenefitCard = ({ index, title, description }) => {
  const { ref, controls } = useInViewAnimation({ amount: 0.3 });
  const cleanTitle = title.replace(/[🔍⚡🔒💬📱]/gu, "").trim();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      custom={index * 0.08}
      className="border border-gray-200 bg-white p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
    >
      <div className="mb-4 flex items-center">
        <span className="text-2xl font-light text-gray-300 group-hover:text-gray-400 transition-colors duration-300">
          {symbols[index % symbols.length]}
        </span>
        <span className="ml-auto text-xs text-gray-300 font-mono">
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </div>

      <div className="w-8 h-px bg-gray-200 mb-4 group-hover:w-12 group-hover:bg-gray-400 transition-all duration-300" />

      <h4 className="text-base font-medium text-gray-900 mb-2 tracking-tight uppercase">
        {cleanTitle}
      </h4>

      <p className="text-gray-500 text-sm leading-relaxed font-light">
        {description}
      </p>

      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-gray-400">——</span>
      </div>
    </motion.div>
  );
};

export default BenefitCard;