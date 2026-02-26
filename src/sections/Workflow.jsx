// Workflow.jsx
import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
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
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

// ✅ Komponen Workflow Step Card dengan desain monokrom
const WorkflowStepCard = ({ step, title, description, image, index, tooltip }) => {
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
            custom={index * 0.1}
            className="group relative bg-white p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-default"
          >
            {/* Step Number - Desain minimal */}
            <div className="flex items-start justify-between mb-4">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                className="text-5xl font-light text-gray-100"
              >
                {step.toString().padStart(2, '0')}
              </motion.span>
              
              {/* Connector Line (desktop only) - Lebih subtle */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%-2rem)] w-12 h-px bg-gray-200" />
              )}
            </div>

            {/* Image Placeholder - Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
              className="aspect-video bg-gray-50 mb-4 border border-gray-100 flex items-center justify-center overflow-hidden"
            >
              {image ? (
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Step Title */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="text-lg font-medium text-gray-900 mb-2 tracking-tight"
            >
              {title}
            </motion.h3>

            {/* Step Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="text-gray-500 text-sm leading-relaxed font-light"
            >
              {description}
            </motion.p>

            {/* Subtle Hover Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </motion.div>
        </Tooltip.Trigger>
        
        {/* Tooltip dengan desain minimal */}
        <Tooltip.Content 
          side="top" 
          className="bg-gray-900 text-white text-xs px-3 py-2 rounded-sm border border-gray-800 max-w-xs"
          sideOffset={8}
        >
          {tooltip || `${title}: ${description}`}
          {/* <TooltipContent.Arrow className="fill-gray-900" /> */}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

const Workflow = () => {
  const workflowSteps = [
    {
      step: 1,
      title: 'Konsultasi',
      description: 'Diskusikan kebutuhan website Anda bersama tim kami untuk memahami visi dan goals bisnis Anda.',
      image: '',
      tooltip: 'Kami akan memahami visi, target audiens, dan goals bisnis Anda secara mendalam.',
    },
    {
      step: 2,
      title: 'Desain & Development',
      description: 'Kami membuat desain dan mengembangkan website Anda dengan teknologi terkini.',
      image: '',
      tooltip: 'UI/UX modern dengan pendekatan mobile-first dan kode yang clean & scalable.',
    },
    {
      step: 3,
      title: 'Review & Revisi',
      description: 'Anda review hasil kerja kami dan kami lakukan revisi hingga sesuai keinginan.',
      image: '',
      tooltip: 'Feedback-driven process dengan unlimited revisi hingga Anda 100% puas.',
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'Website diluncurkan dan kami berikan dukungan pemeliharaan berkelanjutan.',
      image: '',
      tooltip: 'Deploy aman dengan dokumentasi lengkap + maintenance & support jangka panjang.',
    },
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
        
        {/* Garis diagonal dekoratif */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-20"
        >
        <SectionTitle 
          title="Proses Ringkas Hasil Maksimal"
          subtitle="Kami mengadaptasi proses kerja yang efisien agar Anda dapat segera melesatkan bisnis ke level selanjutnya."
          badge="Alur Kerja"
          centered={true}
          variant="default"
          highlightLastWords={2}
        />
        </motion.div>

        {/* Workflow Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {workflowSteps.map((item, index) => (
            <WorkflowStepCard
              key={item.step}
              {...item}
              index={index}
            />
          ))}
        </motion.div>

        {/* Progress Indicator - Minimal */}
        <motion.div 
          className="hidden lg:flex items-center justify-center mt-16 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[1, 2, 3, 4].map((num) => (
            <React.Fragment key={num}>
              <motion.div
                className="w-2 h-2 bg-gray-200 rounded-full"
                whileHover={{ scale: 1.5, backgroundColor: '#111' }}
                transition={{ duration: 0.2 }}
              />
              {num < 4 && (
                <div className="w-12 h-px bg-gray-200" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* CTA - Desain minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">
            Siap memulai proyek Anda?
          </p>
          <ButtonKonsul
            phone="6289876543210"
            message="Halo, saya ingin lihat detail proses"
            variant="secondary"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Workflow;