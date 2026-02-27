import React, { useState } from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { agencyImageUrl, agencyData } from "../../data/ShowcaseData";
import { fadeInUp, staggerContainer, scaleIn } from "../../animations/variants";

const AgencyShowcase = () => {
  const [error, setError] = useState(false);

  return (
    <section className="w-full min-h-screen bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                           linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="relative order-1 lg:order-2 w-full"
          >
            <div className="aspect-[4/3] lg:aspect-[4/3] bg-gray-50 border border-gray-200 overflow-hidden shadow-xl">
              {agencyImageUrl && !error ? (
                <img
                  src={agencyImageUrl}
                  alt={agencyData.title}
                  className="w-full h-full object-cover"
                  onError={() => setError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <p className="text-gray-400 text-sm">Failed to load image</p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-gray-200 -z-10" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer()}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 border border-gray-200 bg-white text-gray-600 text-xs font-medium tracking-[0.2em] uppercase">
                {agencyData.subtitle}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight"
            >
              {agencyData.title}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-base sm:text-lg leading-relaxed font-light max-w-xl"
            >
              {agencyData.description}
            </motion.p>

            <motion.div
              variants={staggerContainer()}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-4"
            >
              {agencyData.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-xl sm:text-2xl font-light text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={staggerContainer()}
              className="pt-4 space-y-2 sm:space-y-3"
            >
              {agencyData.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-3"
                >
                  <div className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300">
                LIHAT DETAIL
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;
