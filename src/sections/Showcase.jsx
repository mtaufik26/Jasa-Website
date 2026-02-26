// Showcase.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================
// DATA INDEX 0: BISNIS KORPORAT (Slider)
// ============================================
const korporatImages = [
  '', // Foto 1 - Company Profile
  '', // Foto 2 - Portfolio
  '', // Foto 3 - Landing Page
  '', // Foto 4 - E-commerce
];

const korporatData = [
  {
    title: 'Company Profile',
    category: 'Bisnis Korporat',
    description: 'Tampilan profesional untuk membangun kredibilitas perusahaan Anda.',
    stats: ['+40% Kepercayaan', '24/7 Akses', 'Mobile Ready']
  },
  {
    title: 'Portfolio Kreatif',
    category: 'Agency & Freelancer',
    description: 'Presentasi karya yang impresif untuk menarik klien potensial.',
    stats: ['+60% Engagement', 'Filter Karya', 'Client Testimoni']
  },
  {
    title: 'Landing Page',
    category: 'Marketing Campaign',
    description: 'Halaman konversi tinggi untuk produk atau layanan unggulan Anda.',
    stats: ['+35% Konversi', 'A/B Testing', 'Analytics Ready']
  },
  {
    title: 'E-Commerce',
    category: 'Toko Online',
    description: 'Solusi jualan online dengan sistem pembayaran terintegrasi.',
    stats: ['+50% Penjualan', 'Multi Payment', 'Inventory System']
  }
];

// ============================================
// DATA INDEX 1: AGENCY & FREELANCER (Static)
// ============================================
const agencyImageUrl = '';

const agencyData = {
  title: 'Company Profile & Portfolio Kreatif',
  subtitle: 'Agency & Freelancer',
  description:
    'Tampilan profesional yang membangun kredibilitas sekaligus modern untuk menampilkan karya terbaik Anda. Cocok untuk perusahaan, agency, maupun freelancer.',
  stats: [
    { label: 'KEPERCAYAAN', value: '+40%' },
    { label: 'ENGAGEMENT', value: '+60%' },
    { label: 'AKSES', value: '24/7' }
  ],
  features: [
    'Profil Perusahaan',
    'Visi & Misi',
    'Gallery Grid',
    'Filter Kategori',
    'Testimoni'
  ],
  previewText: 'Preview Website'
};

// ============================================
// MAIN COMPONENT
// ============================================
const Showcase = ({ index = 0, initialIndex = 0 }) => {
  
  // =====================================================
  // INDEX 0: Render mode Korporat (Slider)
  // =====================================================
  if (index === 0) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [loaded, setLoaded] = useState(Array(korporatImages.length).fill(false));
    const [error, setError] = useState(Array(korporatImages.length).fill(false));
    const [direction, setDirection] = useState(0);

    const currentImage = korporatImages[currentIndex];
    const currentData = korporatData[currentIndex];
    const hasImage = currentImage && !error[currentIndex];

    // Preload images
    useEffect(() => {
      korporatImages.forEach((src, idx) => {
        if (src) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setLoaded(prev => {
              const newState = [...prev];
              newState[idx] = true;
              return newState;
            });
          };
          img.onerror = () => {
            setError(prev => {
              const newState = [...prev];
              newState[idx] = true;
              return newState;
            });
          };
        }
      });
    }, []);

    const nextSlide = () => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % korporatImages.length);
    };

    const prevSlide = () => {
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + korporatImages.length) % korporatImages.length);
    };

    const goToSlide = (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    };

    // Animation variants - Slider
    const slideVariants = {
      enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
      }),
      center: {
        x: 0,
        opacity: 1,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.4 }
        }
      },
      exit: (direction) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.3 }
        }
      })
    };

    const fadeInUp = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
      }
    };

    const staggerContainer = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };

    return (
      <section className="w-full h-screen bg-white relative overflow-hidden">
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                             linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }} />
          
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full h-full flex">
          
          {/* Left Panel - Information */}
          <motion.div 
            className="w-full lg:w-2/5 h-full bg-white flex items-center relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Vertical line decoration */}
            <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
            
            <div className="w-full px-8 lg:px-12 xl:px-16 py-12">
              <motion.div
                key={currentIndex}
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Category badge */}
                <motion.div variants={fadeInUp}>
                  <span className="inline-block px-4 py-2 border border-gray-200 bg-white text-gray-500 text-xs font-medium tracking-[0.2em] uppercase">
                    {currentData.category}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h2 
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight"
                >
                  {currentData.title}
                </motion.h2>

                {/* Description */}
                <motion.p 
                  variants={fadeInUp}
                  className="text-gray-500 text-base lg:text-lg leading-relaxed font-light"
                >
                  {currentData.description}
                </motion.p>

                {/* Stats */}
                <motion.div 
                  variants={staggerContainer}
                  className="grid grid-cols-3 gap-4 pt-4"
                >
                  {currentData.stats.map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      variants={fadeInUp}
                      className="text-center"
                    >
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        {idx === 0 ? 'ROI' : idx === 1 ? 'Feature' : 'Optimasi'}
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        {stat}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Navigation dots */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center gap-3 pt-8"
                >
                  {korporatImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`h-0.5 transition-all duration-300 ${
                        idx === currentIndex 
                          ? 'w-8 bg-gray-900' 
                          : 'w-4 bg-gray-200 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </motion.div>

                {/* Navigation arrows */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center gap-4 pt-4"
                >
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 border border-gray-200 hover:border-gray-400 bg-white flex items-center justify-center group transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 border border-gray-200 hover:border-gray-400 bg-white flex items-center justify-center group transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel - Image Showcase */}
          <motion.div 
            className="hidden lg:block lg:w-3/5 h-full bg-gray-50 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                {/* Image or Placeholder */}
                <div className="relative w-full h-full">
                  {hasImage && loaded[currentIndex] ? (
                    <img
                      src={currentImage}
                      alt={currentData.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-50">
                      <div className="text-center">
                        {/* Minimal geometric pattern */}
                        <div className="grid grid-cols-3 gap-2 mb-6">
                          {[...Array(9)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-12 h-12 border border-gray-200 flex items-center justify-center"
                            >
                              <span className="text-gray-300 text-xs">
                                {i + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-400 text-sm uppercase tracking-wider">
                          Preview {currentData.title}
                        </p>
                        <p className="text-gray-300 text-xs mt-2 font-light">
                          Image placeholder
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 pointer-events-none" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide counter */}
            <div className="absolute bottom-8 right-8 bg-white border border-gray-200 px-4 py-2 text-sm">
              <span className="text-gray-900 font-medium">{currentIndex + 1}</span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-gray-400">{korporatImages.length}</span>
            </div>
          </motion.div>

          {/* Mobile View - Simple version */}
          <div className="lg:hidden w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <span className="inline-block px-4 py-2 mb-6 border border-gray-200 text-gray-600 text-xs tracking-[0.2em] uppercase">
                {currentData.category}
              </span>
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                {currentData.title}
              </h2>
              <p className="text-gray-500 text-base mb-8 font-light">
                {currentData.description}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 border border-gray-200"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 border border-gray-200"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // INDEX 1: Render mode Agency (Static)
  // =====================================================
  if (index === 1) {
    const [error, setError] = useState(false);

    const fadeInUp = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
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

    const scaleIn = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
      }
    };

    return (
      <section className="w-full min-h-screen bg-white relative overflow-hidden">

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                           linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT SIDE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-2 border border-gray-200 bg-white text-gray-600 text-xs font-medium tracking-[0.2em] uppercase">
                  {agencyData.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={fadeInUp}
                className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight"
              >
                {agencyData.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-gray-500 text-lg leading-relaxed font-light max-w-xl"
              >
                {agencyData.description}
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-3 gap-6 pt-4"
              >
                {agencyData.stats.map((stat, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="text-center">
                    <div className="text-2xl font-light text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Features */}
              <motion.div
                variants={staggerContainer}
                className="pt-4 space-y-3"
              >
                {agencyData.features.map((feature, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeInUp} className="pt-4">
                <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300">
                  LIHAT DETAIL
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gray-50 border border-gray-200 overflow-hidden shadow-xl">
                {agencyImageUrl && !error ? (
                  <img
                    src={agencyImageUrl}
                    alt={agencyData.title}
                    className="w-full h-full object-cover"
                    onError={() => setError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 border border-gray-200 flex items-center justify-center bg-white"
                          >
                            <span className="text-gray-300 text-xs">
                              {i + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider">
                        {agencyData.previewText}
                      </p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gray-200 -z-10" />
            </motion.div>

          </div>
        </div>
      </section>
    );
  }

  // Fallback jika index tidak valid
  return null;
};

export default Showcase;