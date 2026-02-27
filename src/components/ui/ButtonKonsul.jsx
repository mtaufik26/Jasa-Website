import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line

const WhatsAppIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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

function ButtonKonsul({
  phone = "6281234567890",
  message = "Halo, saya mau konsultasi",
  className = "",
  variant = "primary",
}) {
  const sanitizedPhone = phone.replace(/[\s\-+()]/g, "");
  const whatsappLink = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(message)}`;

  const baseStyles = `
    inline-flex items-center justify-center gap-3
    px-6 py-3 sm:px-8 sm:py-4
    text-sm font-medium tracking-wide uppercase
    transition-all duration-300
    focus:outline-none focus:ring-1 focus:ring-gray-400
    active:scale-[0.99]
  `;

  const variants = {
    primary: `
      bg-gray-900 hover:bg-gray-800
      text-white
      border border-gray-900
    `,
    secondary: `
      bg-white hover:bg-gray-50
      text-gray-700 hover:text-gray-900
      border border-gray-200 hover:border-gray-400
    `,
  };

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      aria-label="Konsultasi gratis via WhatsApp"
    >
      {variant === "primary" ? (
        <>
          <WhatsAppIcon />
          <span>Konsultasi Gratis</span>
        </>
      ) : (
        <>
          <span>Lihat Detail</span>
          <ArrowIcon />
        </>
      )}
    </motion.a>
  );
}

export default ButtonKonsul;
