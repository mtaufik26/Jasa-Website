// components/ui/Accordion.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// ✅ Animation Variants - Lebih subtle
const accordionContentVariants = {
  hidden: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }
  },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const Accordion = ({ question, answer, index = 0 }) => {
  const itemId = `faq-item-${index}`;

  return (
    <RadixAccordion.Root 
      type="single" 
      collapsible 
      className="w-full"
    >
      <RadixAccordion.Item value={itemId} className="group">
        {/* Trigger / Question Button - Desain minimal */}
        <RadixAccordion.Trigger 
          className="
            w-full text-left px-6 py-5
            flex justify-between items-center gap-4
            text-gray-700 group-data-[state=open]:text-gray-900
            font-medium text-base sm:text-lg
            transition-colors duration-200
            focus:outline-none focus:ring-1 focus:ring-gray-300
          "
          aria-label={`Toggle answer for: ${question}`}
        >
          <span className="flex-1 pr-4 leading-relaxed tracking-wide">
            {question}
          </span>
          
          {/* Animated Chevron Icon - Hitam putih */}
          <motion.span
            className="flex-shrink-0"
            animate={{ rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <RadixAccordion.Trigger asChild>
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                data-state-trigger
              >
                <ChevronDownIcon 
                  className="w-5 h-5 sm:w-5 sm:h-5 text-gray-400 group-data-[state=open]:text-gray-600 transition-colors duration-200"
                  data-state-chevron
                />
              </motion.div>
            </RadixAccordion.Trigger>
          </motion.span>
        </RadixAccordion.Trigger>

        {/* Content / Answer dengan desain minimal */}
        <RadixAccordion.Content className="overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key="content"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={accordionContentVariants}
              className="will-change-[height,opacity]"
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
          </AnimatePresence>
        </RadixAccordion.Content>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};

export default Accordion;