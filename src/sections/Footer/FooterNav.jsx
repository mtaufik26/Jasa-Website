import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { navLinks } from "./FooterData";
import FooterLink from "../../components/cards/FooterLink";
import { fadeInUp, staggerContainer } from "../../animations/variants";

const FooterNav = () => {
  return (
    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
      <motion.div
        variants={staggerContainer()}
      >
        <motion.h4
          className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
          variants={fadeInUp}
        >
          Layanan
        </motion.h4>
        <motion.ul className="space-y-2" variants={staggerContainer()}>
          {navLinks.layanan.map((link, index) => (
            <FooterLink key={index} href={link.href} index={index}>
              {link.name}
            </FooterLink>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        variants={staggerContainer()}
      >
        <motion.h4
          className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
          variants={fadeInUp}
        >
          Perusahaan
        </motion.h4>
        <motion.ul className="space-y-2" variants={staggerContainer()}>
          {navLinks.perusahaan.map((link, index) => (
            <FooterLink key={index} href={link.href} index={index}>
              {link.name}
            </FooterLink>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        variants={staggerContainer()}
      >
        <motion.h4
          className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
          variants={fadeInUp}
        >
          Bantuan
        </motion.h4>
        <motion.ul className="space-y-2" variants={staggerContainer()}>
          {navLinks.bantuan.map((link, index) => (
            <FooterLink key={index} href={link.href} index={index}>
              {link.name}
            </FooterLink>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default FooterNav;