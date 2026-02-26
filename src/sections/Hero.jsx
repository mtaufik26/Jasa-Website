// Hero.jsx
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import ButtonKonsul from '../components/ui/ButtonKonsul';
import SectionTitle from '../components/ui/SectionTitle';

// ✅ Animation Variants - Lebih subtle dan profesional
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } // easing lebih natural
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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

// Animasi yang sangat subtle untuk elemen dekoratif
const subtleFloat = {
  animate: {
    y: [-3, 3, -3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const subtlePulse = {
  animate: {
    opacity: [0.5, 0.7, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// ✅ Komponen Badge dengan desain monokrom
const FeatureBadge = ({ children, position, delay, tooltip }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      delay, 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1]
    }}
    className={`absolute ${position} hidden lg:block`}
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
  >
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-white px-4 py-2.5 rounded-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
            <span className="text-xs text-gray-700 font-medium tracking-wide uppercase">
              {children}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-gray-900 text-white text-xs px-3 py-2 rounded-sm border border-gray-800"
          sideOffset={8}
        >
          {tooltip || children}
          <TooltipContent.Arrow className="fill-gray-900" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </motion.div>
);

// ✅ Wrapper untuk scroll-based animations
const FadeInSection = ({ children, delay = 0, className = '', variants = fadeInUp }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Decorative Elements - Sangat minimal dan subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern yang sangat subtle */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px), 
                           linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} />
        
        {/* Gradien halus hitam-putih */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-100 via-transparent to-gray-100 rounded-full"
          variants={subtlePulse}
          animate="animate"
        />
        
        {/* Beberapa titik dekoratif minimal */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-gray-300 rounded-full" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-300 rounded-full" />
        <div className="absolute top-40 right-40 w-2 h-2 bg-gray-200 rounded-full" />
      </div>

      {/* Floating Badges - Desain monokrom */}
      <FeatureBadge 
        position="top-24 left-8 xl:left-16" 
        delay={0.2} 
        tooltip="Desain UI/UX yang eksklusif dan tailored untuk brand Anda"
      >
        DESAIN EKSKLUSIF
      </FeatureBadge>
      
      <FeatureBadge 
        position="top-20 right-8 xl:right-16" 
        delay={0.35} 
        tooltip="Performa optimal dengan loading cepat"
      >
        CEPAT & OPTIMAL
      </FeatureBadge>
      
      <FeatureBadge 
        position="bottom-24 left-8 xl:left-20" 
        delay={0.5} 
        tooltip="Website siap deploy dengan dokumentasi lengkap"
      >
        SIAP PAKAI
      </FeatureBadge>
      
      <FeatureBadge 
        position="bottom-20 right-8 xl:right-20" 
        delay={0.65} 
        tooltip="Struktur SEO-friendly dan konversi-oriented"
      >
        FOKUS KONVERSI
      </FeatureBadge>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          
          {/* Label - Desain minimal */}
          <FadeInSection className="mb-8">
            <span className="inline-block px-4 py-2 border border-gray-200 bg-white text-gray-600 text-xs font-medium tracking-[0.2em] uppercase">
              Jasa Website Profesional
            </span>
          </FadeInSection>

          {/* Main Heading - Hitam putih tegas */}
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              Jasa Pembuatan{' '}
              <span className="font-bold italic block sm:inline">
                Website Custom
              </span>
            </h1>
          </FadeInSection>

          {/* Subheading - Bersih dan profesional */}
          <FadeInSection>
            <p className="text-base sm:text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Dapatkan website custom yang{' '}
              <span className="font-medium text-gray-700">cepat, responsif, dan SEO-friendly</span>.<br />
              Kami urus seluruh proses—dari strategi hingga optimasi berkelanjutan.
            </p>
          </FadeInSection>

          {/* CTA Button dengan desain monokrom */}
          <FadeInSection>
            <motion.div 
              className="relative inline-block"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              <ButtonKonsul
                phone="6289876543210"
                message="Halo, saya tertarik dengan layanan website custom Anda"
                variant="primary"
              />
            </motion.div>
          </FadeInSection>

          {/* Trust Indicators - Minimal dan clean */}
          <FadeInSection className="mt-12">
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-xs text-gray-400"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                { label: 'Garansi Revisi' },
                { label: 'Support 24/7' },
                { label: '100% Ownership' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-2 transition-colors hover:text-gray-600 cursor-default"
                  variants={fadeInUp}
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="uppercase tracking-wider">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </FadeInSection>

          {/* Quote minimal */}
          <FadeInSection className="mt-16">
            <p className="text-xs text-gray-300 italic">
              "Fokus pada bisnis Anda, biarkan kami yang menangani teknisnya."
            </p>
          </FadeInSection>

        </motion.div>
      </div>

      {/* Mobile Badges */}
      <div className="sm:hidden flex flex-wrap justify-center gap-2 px-4 pb-8 relative z-10">
        {['DESAIN', 'CEPAT', 'SIAP PAKAI', 'KONVERSI'].map((badge, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
            className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium text-gray-600 tracking-wider"
          >
            {badge}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Hero;