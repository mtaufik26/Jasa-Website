import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import ServiceCard from "../../components/cards/ServiceCard";
import { companyProfileData } from "../../data/ServicesData";
import { staggerContainer } from "../../animations/variants";

const CompanyProfileGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer()}
    >
      {companyProfileData.map((item, index) => (
        <ServiceCard
          key={index}
          src={item.src}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default CompanyProfileGrid;