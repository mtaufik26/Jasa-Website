import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { useNavigate } from "react-router-dom";

const ArrowIcon = () => (
  <svg
    className="w-3 h-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

function ButtonDetail({
  className = "",
  href = "/detail",
  children = "Lihat Detail"
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(href);
    window.scrollTo(0, 0);
  };

  const baseStyles = `
    inline-flex items-center justify-center gap-3
    px-6 py-3 sm:px-8 sm:py-4
    text-sm font-medium tracking-wide uppercase
    transition-all duration-300
    focus:outline-none focus:ring-1 focus:ring-gray-400
    active:scale-[0.99]
    bg-white hover:bg-gray-50
    text-gray-700 hover:text-gray-900
    border border-gray-200 hover:border-gray-400
  `;

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`${baseStyles} ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      aria-label="Lihat Detail"
    >
      <span>{children}</span>
      <ArrowIcon />
    </motion.a>
  );
}

export default ButtonDetail;
