import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import ServiceCard from "../../components/cards/ServiceCard";
import { jenisWebsiteData } from "../../data/ServicesData";
import { staggerContainer } from "../../animations/variants";

const ServicesGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer()}
    >
      {jenisWebsiteData.map((item, index) => (
        <ServiceCard
          key={index}
          src={item.src}
          alt={item.alt}
          index={index}
          isFeatured={item.featured}
          tooltip={item.tooltip}
        />
      ))}
    </motion.div>
  );
};

export default ServicesGrid;