import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import ButtonKonsul from "../../components/ui/ButtonKonsul";
import { fadeInUp, staggerContainer } from "../../animations/variants";

const HeroContent = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      variants={staggerContainer(0.12, 0.1)}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInUp} className="mb-8">
        <span className="inline-block px-4 py-2 border border-gray-200 bg-white text-gray-600 text-xs font-medium tracking-[0.2em] uppercase">
          Human Code
        </span>
      </motion.div>

      <motion.h1
        variants={fadeInUp}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight tracking-tight"
      >
        Jasa Pembuatan{" "}
        <span className="font-bold italic block sm:inline">
          Website Profesional
        </span>
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-base sm:text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto font-light"
      >
        Human Code membantu Anda mendapatkan website{" "}
        <span className="font-medium text-gray-700">
          modern, cepat, responsif, dan SEO friendly
        </span>
        .<br />
        Kami menangani seluruh proses mulai dari perencanaan hingga website siap digunakan.
      </motion.p>

      <motion.div variants={fadeInUp}>
        <motion.div
          className="relative inline-block"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.99 }}
        >
          <ButtonKonsul
            phone="6289876543210"
            message="Halo, saya tertarik dengan layanan pembuatan website dari Human Code"
            variant="primary"
          />
        </motion.div>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-12">
        <motion.div
          className="flex flex-wrap justify-center gap-8 text-xs text-gray-400"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[
            { label: "Garansi Revisi" },
            { label: "Support 24/7" },
            { label: "100% Ownership" },
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
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-16">
        <p className="text-xs text-gray-300 italic">
          "Human Code membantu bisnis Anda memiliki website profesional."
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;