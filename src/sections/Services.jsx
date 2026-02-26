// Services.jsx
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import SectionTitle from '../components/ui/SectionTitle';
import ButtonKonsul from '../components/ui/ButtonKonsul';

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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// ✅ Komponen Service Card dengan desain monokrom
const ServiceCard = ({ src, alt, index, isFeatured = false, tooltip }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            custom={index * 0.08}
            whileHover={{ y: -2 }}
            className={`
              border ${isFeatured ? 'border-gray-400' : 'border-gray-200'} 
              bg-white hover:border-gray-300
              transition-all duration-300 cursor-pointer
              ${isFeatured ? 'shadow-md' : 'shadow-sm'}
            `}
          >
            <div className="relative group">
              {src ? (
                <img 
                  src={src} 
                  alt={alt}
                  className="w-full h-48 sm:h-56 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-48 sm:h-56 lg:h-72 bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                    Preview
                  </span>
                </div>
              )}
              
              {/* Featured badge - Hitam putih */}
              {isFeatured && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-3 right-3 px-2 py-1 bg-gray-900 text-white text-xs font-medium uppercase tracking-wider"
                >
                  Populer
                </motion.span>
              )}
            </div>
          </motion.div>
        </Tooltip.Trigger>
        
        <Tooltip.Content 
          side="top" 
          className="bg-gray-900 text-white text-xs px-3 py-2 rounded-sm border border-gray-800 max-w-xs"
          sideOffset={8}
        >
          {tooltip || alt}
          <Tooltip.Arrow className="fill-gray-900" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

// ✅ Komponen Benefit Item dengan desain minimal
const BenefitItem = ({ index, title, description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Extract teks tanpa emoji untuk judul
  const cleanTitle = title.replace(/[🛠️🔍⚡🔒💬📱]/g, '').trim();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      custom={index * 0.08}
      className="border border-gray-200 bg-white p-6 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
    >
      {/* Ikon minimal dalam bentuk simbol tipografi */}
      <div className="mb-4 flex items-center">
        <span className="text-2xl font-light text-gray-300 group-hover:text-gray-400 transition-colors duration-300">
          {index === 0 && '◈'}
          {index === 1 && '◊'}
          {index === 2 && '○'}
          {index === 3 && '□'}
          {index === 4 && '△'}
          {index === 5 && '▽'}
        </span>
        <span className="ml-auto text-xs text-gray-300 font-mono">
          {(index + 1).toString().padStart(2, '0')}
        </span>
      </div>
      
      {/* Garis dekoratif */}
      <div className="w-8 h-px bg-gray-200 mb-4 group-hover:w-12 group-hover:bg-gray-400 transition-all duration-300" />
      
      <h4 className="text-base font-medium text-gray-900 mb-2 tracking-tight uppercase">
        {cleanTitle}
      </h4>
      
      <p className="text-gray-500 text-sm leading-relaxed font-light">
        {description}
      </p>
      
      {/* Hover indicator subtle */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-gray-400">——</span>
      </div>
    </motion.div>
  );
};


const Services = () => {
  // Data untuk Section 1 - Jenis Website
  const jenisWebsiteData = [
    { src: '', alt: 'Website Toko Online', tooltip: 'E-commerce dengan fitur lengkap dan sistem pembayaran terintegrasi' },
    { src: '', alt: 'Website Portfolio', tooltip: 'Tampilan profesional untuk menampilkan karya dan proyek Anda', featured: true },
    { src: '', alt: 'Website Landing Page', tooltip: 'Halaman konversi tinggi untuk campaign marketing' }
  ];

  // Data untuk Section 2 - Company Profile
  const companyProfileData = [
    { src: '', alt: 'Company Profile - Tech Startup', tooltip: 'Desain modern untuk startup teknologi dengan fokus pada inovasi' },
    { src: '', alt: 'Company Profile - Manufacturing', tooltip: 'Tampilan profesional untuk industri manufaktur' },
    { src: '', alt: 'Company Profile - Creative Agency', tooltip: 'Portfolio interaktif untuk agency kreatif' }
  ];

  // Data untuk Section 3 - Apa yang Anda Dapatkan
  const benefitData = [
    { 
      title: 'Fully Responsive', 
      description: 'Tampil sempurna di semua device - desktop, tablet, dan mobile dengan pengalaman pengguna yang konsisten.' 
    },
    { 
      title: 'SEO Friendly', 
      description: 'Struktur kode yang ramah mesin pencari untuk visibilitas optimal di Google dan search engine lainnya.' 
    },
    { 
      title: 'Performa Cepat', 
      description: 'Optimasi Core Web Vitals untuk loading super cepat dan user experience yang memuaskan.' 
    },
    { 
      title: 'Mudah Dikelola', 
      description: 'CMS intuitif dengan dokumentasi lengkap untuk maintenance mandiri tanpa perlu bantuan developer.' 
    },
    { 
      title: 'Aman & Stabil', 
      description: 'SSL certificate, backup rutin, dan monitoring keamanan 24/7 untuk ketenangan pikiran Anda.' 
    },
    { 
      title: 'Support Prioritas', 
      description: 'Bantuan teknis kapan pun Anda butuhkan dengan response time cepat dan solusi tepat.' 
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      
      {/* Decorative Elements - Minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern subtle */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                           linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }} />
        
        {/* Garis dekoratif */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-gray-200 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-gray-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Jenis Website */}
        <motion.div 
          className="mb-20 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <SectionTitle 
              title="Jenis Website yang Kami Sediakan"
              subtitle="Dari toko online hingga company profile profesional.
              Punya ide website custom? Konsultasikan dengan kami."
              badge="Layanan Kami"
              centered={true}
              variant="default"
              highlightLastWords={2}
            />
          </div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {jenisWebsiteData.map((item, index) => (
              <ServiceCard
                key={index}
                src={item.src}
                alt={item.alt}
                index={index}
                isFeatured={item.featured}
                tooltip={item.tooltip}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="flex justify-center my-16">
          <div className="w-16 h-px bg-gray-200" />
        </div>

        {/* Section 2: Company Profile */}
        <motion.div 
          className="mb-20 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <SectionTitle 
              title="Company Profile Profesional"
              subtitle="Bangun kredibilitas dan kepercayaan dengan company profile yang menampilkan 
              bisnis Anda secara profesional."
              badge="Khusus Bisnis"
              centered={true}
              variant="default"
              highlightLastWords={1}
            />
            <motion.div variants={fadeInUp}>
              <motion.div 
                className="relative inline-block"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                <ButtonKonsul
                  phone="6289876543210"
                  message="Halo, saya tertarik dengan layanan Company Profile"
                  className="relative px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-gray-400 text-xs uppercase tracking-wider mb-6"
          >
            Contoh Company Profile
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {companyProfileData.map((item, index) => (
              <ServiceCard
                key={index}
                src={item.src}
                alt={item.alt}
                index={index}
                tooltip={item.tooltip}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="flex justify-center my-16">
          <div className="w-16 h-px bg-gray-200" />
        </div>

        {/* Section 3: Apa yang Anda Dapatkan */}
        <motion.div 
          className="mb-20 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <SectionTitle 
              title="Apa Yang Anda DapatKan"
              subtitle="Setiap proyek website dilengkapi dengan fitur premium untuk 
              memastikan kesuksesan digital bisnis Anda."
              badge="Value Proposition"
              centered={true}
              variant="default"
              highlightLastWords={2}
            />
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {benefitData.map((item, index) => (
              <BenefitItem
                key={index}
                index={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div 
          className="text-center pt-8 border-t border-gray-200"
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
            Konsultasikan kebutuhan website Anda sekarang. Tim kami siap membantu mewujudkan visi digital Anda.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <motion.div 
              className="relative inline-block"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              <ButtonKonsul
                phone="6289876543210"
                message="Halo, saya ingin konsultasi pembuatan website company profile"
                variant="secondary"
              />
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-400"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
          >
            {[
              { label: 'Revisi Hingga Sesuai' },
              { label: 'Garansi 30 Hari' },
              { label: 'Source Code Full' }
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

      </div>
    </section>
  );
};

export default Services;