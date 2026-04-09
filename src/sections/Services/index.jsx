import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import SectionWrapper from "../../components/layout/SectionWrapper";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ButtonDetail from "../../components/ui/ButtonDetail";
import ServicesGrid from "./ServicesGrid";
import CompanyProfileGrid from "./CompanyProfileGrid";
import KorporatShowcase from "./KorporatShowcase";
import AgencyShowcase from "./AgencyShowcase";
import BenefitCard from "../../components/cards/BenefitCard";
import { benefitData } from "../../data/ServicesData";
import { fadeInUp, staggerContainer } from "../../animations/variants";

const Services = () => {
  return (
    <SectionWrapper className="py-20 sm:py-24 lg:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer()}
        >
          <div className="text-center mb-12 lg:mb-16">
            <SectionTitle
              title="Jenis Website yang Kami Sediakan"
              subtitle="Dari toko online hingga company profile profesional. Punya ide website custom? Konsultasikan dengan kami."
              badge="Layanan Kami"
              centered={true}
              variant="default"
              highlightLastWords={2}
            />

            <motion.div variants={fadeInUp} className="mt-8">
              <motion.div
                className="relative inline-block"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                <ButtonDetail />
              </motion.div>
            </motion.div>
          </div>

          <ServicesGrid />
        </motion.div>

        <div className="flex justify-center py-16 lg:py-24">
          <div className="w-16 h-px bg-gray-200" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer()}
        >
          <div className="text-center mb-12 lg:mb-16">
            <SectionTitle
              title="Company Profile Profesional"
              subtitle="Bangun kredibilitas dan kepercayaan dengan company profile yang menampilkan bisnis Anda secara profesional."
              badge="Khusus Bisnis"
              centered={true}
              variant="default"
              highlightLastWords={1}
            />
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-400 text-xs uppercase tracking-wider mb-6"
          >
            Contoh Company Profile
          </motion.p>

          <CompanyProfileGrid />
          
          <div className="mt-16 lg:mt-24 space-y-16 lg:space-y-24">
            <KorporatShowcase initialIndex={0} />
            <AgencyShowcase />
          </div>
        </motion.div>

        <div className="flex justify-center py-16 lg:py-24">
          <div className="w-16 h-px bg-gray-200" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer()}
        >
          <div className="text-center mb-12 lg:mb-16">
            <SectionTitle
              title="Apa Yang Anda DapatKan"
              subtitle="Setiap proyek website dilengkapi dengan fitur premium untuk memastikan kesuksesan digital bisnis Anda."
              badge="Value Proposition"
              centered={true}
              variant="default"
              highlightLastWords={2}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer()}
          >
            {benefitData.map((item, index) => (
              <BenefitCard
                key={index}
                index={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center pt-16 lg:pt-24 mt-16 lg:mt-24 border-t border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-light text-gray-900 mb-3"
          >
            Ingin punya web company profile berkualitas?
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="text-gray-500 text-base max-w-2xl mx-auto mb-6 font-light"
          >
            Konsultasikan kebutuhan website Anda sekarang. Tim kami siap
            membantu mewujudkan visi digital Anda.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <motion.div
              className="relative inline-block"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              <ButtonDetail />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-400"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            {[
              { label: "Revisi Hingga Sesuai" },
              { label: "Garansi 30 Hari" },
              { label: "Source Code Full" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="uppercase tracking-wider">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
      </Container>
    </SectionWrapper>
  );
};

export default Services;