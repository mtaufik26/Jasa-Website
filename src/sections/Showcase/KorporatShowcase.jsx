import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line
import { korporatImages, korporatData } from "../../data/ShowcaseData";
import ShowcaseImage from "./ShowcaseImage";
import { useImageLoader } from "../../hooks/useImageLoader";
import { fadeInUp, staggerContainer, slideVariants } from "../../animations/variants";

const KorporatShowcase = ({ initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  
  const { hasError, isLoading } = useImageLoader(korporatImages);

  const currentImage = korporatImages[currentIndex];
  const currentData = korporatData[currentIndex];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % korporatImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + korporatImages.length) % korporatImages.length,
    );
  };

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  return (
    <section className="w-full min-h-screen lg:min-h-0 lg:h-[700px] xl:h-[800px] bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                             linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5 h-auto lg:h-full bg-white flex items-center order-2 lg:order-1">
          <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-12">
            <motion.div
              key={currentIndex}
              initial="hidden"
              animate="visible"
              variants={staggerContainer()}
              className="space-y-6 lg:space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-block px-4 py-2 border border-gray-200 bg-white text-gray-500 text-xs font-medium tracking-[0.2em] uppercase">
                  {currentData.category}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight"
              >
                {currentData.title}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed font-light"
              >
                {currentData.description}
              </motion.p>

              <motion.div
                variants={staggerContainer()}
                className="grid grid-cols-3 gap-2 sm:gap-4 pt-4"
              >
                {currentData.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      {idx === 0 ? "ROI" : idx === 1 ? "FEATURE" : "OPTIMASI"}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-800">
                      {stat}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {isLoading(currentIndex) && (
                <motion.div 
                  variants={fadeInUp}
                  className="text-center text-xs text-gray-400"
                >
                  Loading image...
                </motion.div>
              )}

              {hasError(currentIndex) && (
                <motion.div 
                  variants={fadeInUp}
                  className="text-center text-xs text-red-400"
                >
                  Failed to load image
                </motion.div>
              )}

              <motion.div variants={fadeInUp} className="flex gap-2 pt-4">
                {korporatData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-0.5 transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-gray-900"
                        : "w-4 bg-gray-200 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-200"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 border border-gray-200 hover:border-gray-400 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-200"
                  aria-label="Next"
                >
                  →
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-3/5 h-[40vh] lg:h-full relative order-1 lg:order-2">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <div className="w-full h-full bg-gray-50 relative">
                <ShowcaseImage
                  src={currentImage}
                  alt={currentData.title}
                  isExplicitLoading={isLoading(currentIndex)}
                  hasExplicitError={hasError(currentIndex)}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-white border border-gray-200 px-3 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm z-20">
            <span className="text-gray-900 font-medium">
              {currentIndex + 1}
            </span>
            <span className="text-gray-400 mx-1">/</span>
            <span className="text-gray-400">{korporatImages.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KorporatShowcase;