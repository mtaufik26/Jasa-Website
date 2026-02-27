import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { contactInfo } from "./FooterData";
import { fadeInUp, staggerContainer } from "../../animations/variants";

const ContactItem = ({ icon, text}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-start group"
    >
      <span className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0">
        {icon}
      </span>
      <span className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-200">
        {text}
      </span>
    </motion.div>
  );
};

const FooterContact = () => {
  const contactItems = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: contactInfo.email,
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: contactInfo.phone,
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: contactInfo.address,
    },
  ];

  return (
    <motion.div
      className="lg:col-span-4"
      variants={staggerContainer()}
    >
      <motion.div variants={fadeInUp} className="mb-6">
        <h3 className="text-2xl font-light text-gray-900 mb-2">
          Bata<span className="font-bold italic">Kreatif</span>
        </h3>
        <p className="text-gray-400 text-xs uppercase tracking-wider">
          Jasa Pembuatan Website Profesional
        </p>
      </motion.div>

      <motion.p
        className="text-gray-500 text-sm leading-relaxed mb-6 font-light"
        variants={fadeInUp}
      >
        Kami membantu bisnis Anda tumbuh dengan website yang
        profesional, modern, dan optimal. Pengalaman bertahun-tahun
        dalam membuat berbagai jenis website untuk berbagai industri.
      </motion.p>

      <div className="space-y-3">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default FooterContact;