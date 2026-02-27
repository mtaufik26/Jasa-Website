import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import SectionWrapper from "../../components/layout/SectionWrapper";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ButtonKonsul from "../../components/ui/ButtonKonsul";
import WorkflowSteps from "./WorkflowSteps";
import { fadeInUp } from "../../animations/variants";

const Workflow = () => {
  return (
    <SectionWrapper className="py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-20"
        >
          <SectionTitle
            title="Proses Ringkas Hasil Maksimal"
            subtitle="Kami mengadaptasi proses kerja yang efisien agar Anda dapat segera melesatkan bisnis ke level selanjutnya."
            badge="Alur Kerja"
            centered={true}
            variant="default"
            highlightLastWords={2}
          />
        </motion.div>

        <WorkflowSteps />

        <motion.div
          className="hidden lg:flex items-center justify-center mt-16 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[1, 2, 3, 4].map((num) => (
            <React.Fragment key={num}>
              <motion.div
                className="w-2 h-2 bg-gray-200 rounded-full"
                whileHover={{ scale: 1.5, backgroundColor: "#111" }}
                transition={{ duration: 0.2 }}
              />
              {num < 4 && <div className="w-12 h-px bg-gray-200" />}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
            Siap memulai proyek Anda?
          </p>
          <ButtonKonsul
            phone="6289876543210"
            message="Halo, saya ingin lihat detail proses"
            variant="secondary"
          />
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

export default Workflow;