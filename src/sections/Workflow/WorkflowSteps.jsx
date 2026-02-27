import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import WorkflowCard from "../../components/cards/WorkflowCard";
import { workflowSteps } from "../../data/WorkflowData";
import { staggerContainer } from "../../animations/variants";

const WorkflowSteps = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      variants={staggerContainer(0.12, 0.1)}
    >
      {workflowSteps.map((item, index) => (
        <WorkflowCard key={item.step} {...item} index={index} />
      ))}
    </motion.div>
  );
};

export default WorkflowSteps;