import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  badge,
  className = "",
  delay = 0,
  variant = "default",
  highlightLastWords = 0,
  breakLastWords = 0,
}) => {
  const titleParts =
    typeof title === "string" ? title.trim().split(/\s+/) : [title];

  const renderTitle = () => {
    const highlightCount = Number(highlightLastWords) || 0;
    const breakCount = Number(breakLastWords) || 0;

    if (highlightCount < 1 && breakCount < 1) {
      return title;
    }

    if (variant === "default") {
      if (breakCount > 0 && breakCount < titleParts.length) {
        const breakIndex = titleParts.length - breakCount;
        const firstPartWords = titleParts.slice(0, breakIndex);
        const lastPartWords = titleParts.slice(breakIndex);

        const firstPart = firstPartWords
          .map((word, idx) => {
            const originalIndex = idx;
            const shouldBeBold =
              highlightCount > 0 &&
              originalIndex >= titleParts.length - highlightCount;

            return shouldBeBold ? (
              <span key={idx} className="font-bold italic">
                {word}
              </span>
            ) : (
              <span key={idx}>{word}</span>
            );
          })
          .reduce((prev, curr) => [prev, " ", curr]);

        const lastPart = lastPartWords
          .map((word, idx) => {
            const originalIndex = breakIndex + idx;
            const shouldBeBold =
              highlightCount > 0 &&
              originalIndex >= titleParts.length - highlightCount;

            return shouldBeBold ? (
              <span key={idx} className="font-bold italic">
                {word}
              </span>
            ) : (
              <span key={idx}>{word}</span>
            );
          })
          .reduce((prev, curr) => [prev, " ", curr]);

        return (
          <>
            {firstPart}
            <br />
            {lastPart}
          </>
        );
      }

      if (highlightCount > 0 && highlightCount < titleParts.length) {
        const normalWords = titleParts.slice(0, -highlightCount).join(" ");
        const highlightedWords = titleParts.slice(-highlightCount).join(" ");

        return (
          <>
            {normalWords}{" "}
            <span className="font-bold italic">{highlightedWords}</span>
          </>
        );
      }

      return title;
    }

    if (variant === "minimal") {
      if (highlightCount > 0 && highlightCount < titleParts.length) {
        const normalWords = titleParts.slice(0, -highlightCount).join(" ");
        const highlightedWords = titleParts.slice(-highlightCount).join(" ");

        return (
          <>
            {normalWords}{" "}
            <span className="font-bold italic">{highlightedWords}</span>
          </>
        );
      }

      if (breakCount > 0 && breakCount < titleParts.length) {
        const firstPart = titleParts.slice(0, -breakCount).join(" ");
        const lastPart = titleParts.slice(-breakCount).join(" ");

        return (
          <>
            {firstPart}
            <br />
            {lastPart}
          </>
        );
      }

      return title;
    }

    return title;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      custom={delay}
      className={`
        mb-12 sm:mb-16 lg:mb-20
        ${centered ? "text-center mx-auto" : "text-left"}
        max-w-3xl
        ${className}
      `}
    >
      {badge && (
        <motion.div
          variants={fadeIn}
          className={`inline-block mb-6 ${centered ? "mx-auto" : ""}`}
        >
          <span className="inline-block px-4 py-2 border border-gray-200 bg-white text-gray-600 text-xs font-medium tracking-[0.2em] uppercase">
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeIn}
        className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 leading-tight tracking-tight"
      >
        {renderTitle()}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeIn}
          transition={{ delay: 0.1 }}
          className={`text-base sm:text-lg text-gray-500 leading-relaxed font-light max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        variants={fadeIn}
        transition={{ delay: 0.15 }}
        className={`mt-6 sm:mt-8 flex items-center gap-2 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <div className="w-8 h-px bg-gray-200" />
        <div className="w-2 h-2 border border-gray-300 rotate-45" />
        <div className="w-8 h-px bg-gray-200" />
      </motion.div>

      {variant === "minimal" && (
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className={`mt-4 w-12 h-px bg-gray-300 ${centered ? "mx-auto" : ""}`}
        />
      )}
    </motion.div>
  );
};

export default SectionTitle;
