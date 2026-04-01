import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ButtonKonsul from "../../components/ui/ButtonKonsul";
import FooterContact from "./FooterContact";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";
import { fadeInUp } from "../../animations/variants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white">
      <div className="border-b border-gray-200 bg-gray-50">
        <Container className="py-16 lg:py-20 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle
              title="Siap Membuat Website Impian Anda?"
              subtitle="Konsultasikan kebutuhan website Anda sekarang juga. Tim kami siap membantu mewujudkan website profesional untuk bisnis Anda."
              badge="Mulai Website Anda"
              centered={true}
              variant="minimal"
              highlightLastWords={2}
            />
            <motion.div variants={fadeInUp} className="mt-8">
              <motion.div
                className="relative inline-block"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                <ButtonKonsul
                  phone="6289876543210"
                  message="Halo, saya ingin konsultasi pembuatan website"
                  className="relative px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      <div className="bg-white">
        <Container className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            <FooterContact />
            <FooterNav />
          </div>
        </Container>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-400 text-xs order-2 md:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              © {currentYear} Human Code. All rights reserved.
            </motion.p>
            <FooterSocial />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;