import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { navLinks } from "./FooterData";
import FooterLink from "../../components/cards/FooterLink";
import { fadeInUp, staggerContainer } from "../../animations/variants";
import Logo from "../../../public/Logo/4.1.png"

const FooterNav = () => {
  return (
    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <motion.div variants={staggerContainer()}>
        <motion.h4
          className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
          variants={fadeInUp}
        >
          Navigasi Utama
        </motion.h4>

        <motion.ul className="space-y-2" variants={staggerContainer()}>
          {navLinks.navigasi.map((link, index) => (
            <FooterLink key={index} href={link.href} index={index}>
              {link.name}
            </FooterLink>
          ))}
        </motion.ul>
      </motion.div>

      {/* <motion.div variants={staggerContainer()}>
        <motion.h4
          className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
          variants={fadeInUp}
        >
          Layanan Spesialis
        </motion.h4>

        <motion.ul className="space-y-2" variants={staggerContainer()}>
          {navLinks.layanan.map((link, index) => (
            <FooterLink key={index} href={link.href} index={index}>
              {link.name}
            </FooterLink>
          ))}
        </motion.ul>
      </motion.div> */}

      <motion.div variants={staggerContainer()}>
        <motion.h4
          className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
          variants={fadeInUp}
        >
          Alasan Memilih Human Code
        </motion.h4>

        <motion.ul className="space-y-2" variants={staggerContainer()}>
          {navLinks.badge.map((link, index) => (
            <FooterLink key={index} href={link.href} index={index}>
              {link.name}
            </FooterLink>
          ))}
        </motion.ul>
      </motion.div>

      {/* Logo Section */}
      <motion.div
        variants={staggerContainer()}
        className="flex flex-col items-center lg:items-start justify-center"
      >
        <motion.div
          className="w-full h-full mb-4"
          variants={fadeInUp}
        >
          <img 
            src={Logo}
            alt="Human Code Logo" 
            className="w-full h-full object-contain"
          />
         
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FooterNav;