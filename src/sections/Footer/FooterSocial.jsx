import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import * as Tooltip from "@radix-ui/react-tooltip";
import { socialLinks } from "./FooterData";
import { staggerContainer } from "../../animations/variants";

const SocialIcon = ({ name, href, icon, index }) => {
  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -2 }}
            className="w-9 h-9 border border-gray-200 hover:border-gray-400 bg-white flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
            aria-label={name}
          >
            {icon}
          </motion.a>
        </Tooltip.Trigger>

        <Tooltip.Content
          side="top"
          className="bg-gray-900 text-white text-xs px-3 py-2 rounded-sm border border-gray-800"
          sideOffset={8}
        >
          {name}
          <Tooltip.Arrow className="fill-gray-900" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

const FooterSocial = () => {
  return (
    <motion.div
      className="flex items-center gap-2 order-1 md:order-2"
      variants={staggerContainer()}
    >
      {socialLinks.map((social, index) => (
        <SocialIcon key={index} {...social} index={index} />
      ))}
    </motion.div>
  );
};

export default FooterSocial;