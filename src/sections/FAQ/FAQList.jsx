import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import Accordion from "../../components/ui/Accordion";
import { faqData } from "../../data/FAQData";
import { fadeInUp, staggerContainer } from "../../animations/variants";

const FAQList = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      className="space-y-3"
    >
      {faqData.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="border border-gray-200 bg-white hover:border-gray-300 transition-colors duration-300"
        >
          <Accordion question={item.q} answer={item.a} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FAQList;