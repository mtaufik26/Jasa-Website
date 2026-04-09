import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import SectionWrapper from "../../components/layout/SectionWrapper";
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ButtonKonsul from "../../components/ui/ButtonKonsul";
import FAQList from "./FAQList";
import { fadeInUp } from "../../animations/variants";

const FAQ = () => {
  return (
    <SectionWrapper id="faq" className="py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <SectionTitle
              title="Pertanyaan yang Sering Diajukan"
              subtitle="Temukan jawaban cepat untuk pertanyaan umum seputar layanan kami"
              badge="FAQ"
              centered={true}
              variant="default"
              highlightLastWords={2}
              breakLastWords={1}
            />
          </motion.div>

          <FAQList />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-4 bg-gray-50 border border-gray-200">
              <span className="text-gray-600 text-sm uppercase tracking-wider">
                Masih ada pertanyaan?
              </span>
              <ButtonKonsul
                  phone = "+62 85710249716"
                message="Halo, saya tertarik dengan layanan Anda"
                className="relative px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default FAQ;