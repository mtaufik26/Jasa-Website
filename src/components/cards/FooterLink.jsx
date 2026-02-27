import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { fadeInUp } from "../../animations/variants";

const FooterLink = ({ href, children, index = 0 }) => {
  return (
    <motion.li
      variants={fadeInUp}
      custom={index * 0.03}
    >
      <motion.a
        href={href}
        className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200 inline-block"
        whileHover={{ x: 2, transition: { duration: 0.15 } }}
      >
        {children}
      </motion.a>
    </motion.li>
  );
};

export default FooterLink;