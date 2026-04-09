import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import IllustrationCard from "../../components/cards/IllustrationCard";
import { jenisWebsiteData } from "../../data/ServicesData";
import { staggerContainer } from "../../animations/variants";

const ServicesGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      variants={staggerContainer()}
    >
      {jenisWebsiteData.map((item, index) => (
        <IllustrationCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          index={index}
          isFeatured={item.featured}
        />
      ))}
    </motion.div>
  );
};

export default ServicesGrid;