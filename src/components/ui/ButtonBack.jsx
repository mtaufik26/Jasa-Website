import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line

const ButtonBack = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <motion.button 
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(-1)}
      className={`inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300 ${className}`}
      aria-label="Kembali ke halaman sebelumnya"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Kembali
    </motion.button>
  );
};

export default ButtonBack;
