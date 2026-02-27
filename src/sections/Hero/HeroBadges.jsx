import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import FeatureBadge from "./FeatureBadge";

const HeroBadges = () => {
  return (
    <>
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
        tooltip="Struktur SEO friendly dan konversi-oriented"
      >
        FOKUS KONVERSI
      </FeatureBadge>

      <div className="lg:hidden absolute bottom-8 left-0 right-0 flex flex-wrap justify-center gap-2 px-4 z-10">
        {["DESAIN", "CEPAT", "SIAP PAKAI", "KONVERSI"].map((badge, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
            className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium text-gray-600 tracking-wider shadow-sm"
          >
            {badge}
          </motion.span>
        ))}
      </div>
    </>
  );
};

export default HeroBadges;