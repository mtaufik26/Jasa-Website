// Footer.jsx
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import ButtonKonsul from '../components/ui/ButtonKonsul';
import SectionTitle from '../components/ui/SectionTitle';

// ✅ Animation Variants - Subtle dan konsisten
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// ✅ Footer Link dengan desain minimal
const FooterLink = ({ href, children, index = 0 }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
    >
      <motion.a
        href={href}
        className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200 inline-block"
        whileHover={{ x: 2, transition: { duration: 0.15 } }}
      >
        {children}
      </motion.a>
    </motion.li>
  );
};

// ✅ Social Icon dengan desain monokrom
const SocialIcon = ({ name, href, icon, index = 0 }) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ y: -2 }}
            className="w-9 h-9 border border-gray-200 hover:border-gray-400 bg-white 
              flex items-center justify-center text-gray-600 hover:text-gray-900
              transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
            aria-label={name}
          >
            {icon}
          </motion.a>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-gray-900 text-white text-xs px-3 py-2 rounded-sm border border-gray-800"
          sideOffset={8}
        >
          {name}
          <TooltipContent.Arrow className="fill-gray-900" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// ✅ Contact Item dengan desain minimal
const ContactItem = ({ icon, text, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = {
    layanan: [
      { name: 'Company Profile', href: '#company-profile' },
      { name: 'Landing Page', href: '#landing-page' },
      { name: 'E-Commerce', href: '#ecommerce' },
      { name: 'Custom Website', href: '#custom' },
    ],
    perusahaan: [
      { name: 'Tentang Kami', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Testimoni', href: '#testimonials' },
      { name: 'Blog', href: '#blog' },
    ],
    bantuan: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Kebijakan Privasi', href: '#privacy' },
      { name: 'Syarat & Ketentuan', href: '#terms' },
      { name: 'Hubungi Kami', href: '#contact' },
    ],
  };

  const contactInfo = {
    email: 'hello@batakreatif.com',
    phone: '+62 812-3456-7890',
    whatsapp: '+62 812-3456-7890',
    address: 'Jl. Kreativitas No. 123, Jakarta Selatan',
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/batakreatif',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/batakreatif',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-white">
      
      {/* Decorative Elements - Minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern subtle */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                           linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }} />
        
        {/* Garis horizontal dekoratif */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Section 1: CTA Banner - Desain monokrom */}
      <motion.div 
        className="border-b border-gray-200 bg-gray-50 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <SectionTitle 
            title="Siap Membuat Website Impian Anda?"
            subtitle="Konsultasikan kebutuhan website Anda sekarang juga. Tim kami siap membantu mewujudkan website profesional untuk bisnis Anda."
            badge="Mulai Proyek Anda"
            centered={true}
            variant="minimal"
            highlightLastWords={2}
          />
          <motion.div variants={fadeInUp}>
            <motion.div 
              className="relative inline-block"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              <ButtonKonsul
                phone="6289876543210"
                message="Halo, saya tertarik dengan layanan Anda"
                className="relative px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Section 2: Main Footer Content */}
      <div className="bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand & Contact Info - Lebih lebar */}
            <motion.div 
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
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
                Kami membantu bisnis Anda tumbuh dengan website yang profesional, modern, dan optimal. Pengalaman bertahun-tahun dalam membuat berbagai jenis website untuk berbagai industri.
              </motion.p>
              
              <div className="space-y-3">
                <ContactItem 
                  index={0}
                  icon={
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  text={contactInfo.email}
                />
                <ContactItem 
                  index={1}
                  icon={
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  text={contactInfo.phone}
                />
                <ContactItem 
                  index={2}
                  icon={
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  text={contactInfo.address}
                />
              </div>
            </motion.div>

            {/* Navigation Links - Grid 3 kolom */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Layanan */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h4 
                  className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
                  variants={fadeInUp}
                >
                  Layanan
                </motion.h4>
                <motion.ul 
                  className="space-y-2"
                  variants={staggerContainer}
                >
                  {navLinks.layanan.map((link, index) => (
                    <FooterLink key={index} href={link.href} index={index}>
                      {link.name}
                    </FooterLink>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Perusahaan */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h4 
                  className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
                  variants={fadeInUp}
                >
                  Perusahaan
                </motion.h4>
                <motion.ul 
                  className="space-y-2"
                  variants={staggerContainer}
                >
                  {navLinks.perusahaan.map((link, index) => (
                    <FooterLink key={index} href={link.href} index={index}>
                      {link.name}
                    </FooterLink>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Bantuan */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h4 
                  className="text-gray-900 text-sm font-medium uppercase tracking-wider mb-4"
                  variants={fadeInUp}
                >
                  Bantuan
                </motion.h4>
                <motion.ul 
                  className="space-y-2"
                  variants={staggerContainer}
                >
                  {navLinks.bantuan.map((link, index) => (
                    <FooterLink key={index} href={link.href} index={index}>
                      {link.name}
                    </FooterLink>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Bottom Bar - Hitam putih tegas */}
      <motion.div 
        className="border-t border-gray-200 bg-white relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <motion.p 
              className="text-gray-400 text-xs order-2 md:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              © {currentYear} Bata Kreatif. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-2 order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {socialLinks.map((social, index) => (
                <SocialIcon 
                  key={index}
                  {...social}
                  index={index}
                />
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;