import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = ({ question, answer = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-gray-700 data-[state=open]:text-gray-900 font-medium text-base sm:text-lg transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
      >
        <span className="flex-1 pr-4 leading-relaxed tracking-wide">
          {question}
        </span>

        <motion.span
          className="flex-shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <ChevronDownIcon className="w-5 h-5 text-gray-400 transition-colors duration-200" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
            }}
            className="overflow-hidden will-change-[height,opacity]"
          >
            <div className="px-6 pb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.25 }}
                className="pt-2 border-t border-gray-100"
              >
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
                  {answer}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
