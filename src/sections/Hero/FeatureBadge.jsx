import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import TooltipWrapper from "../../components/ui/TooltipWrapper";

const FeatureBadge = ({ children, position, delay, tooltip }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    className={`absolute ${position} hidden lg:block pointer-events-auto`}
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
  >
    <TooltipWrapper content={tooltip || children}>
      <div className="bg-white px-4 py-2.5 rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
        <span className="text-xs text-gray-700 font-medium tracking-wide uppercase">
          {children}
        </span>
      </div>
    </TooltipWrapper>
  </motion.div>
);

export default FeatureBadge;