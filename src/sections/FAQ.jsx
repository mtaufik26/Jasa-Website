// FAQ.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Accordion from '../components/Accordion';
import ButtonKonsul from '../components/ui/ButtonKonsul';

// ✅ Animation Variants - Subtle dan profesional
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const FAQ = () => {
  const faqData = [
    {
      q: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu Website?",
      a: "Pengerjaan website sangat fleksibel sesuai kebutuhan Anda. Untuk landing page atau website 1 halaman, kami dapat menyelesaikannya mulai dari 1-3 hari. Sedangkan untuk website company profile dengan struktur lebih lengkap, rata-rata hanya membutuhkan waktu sekitar 1-3 minggu termasuk revisi. Kami fokus pada proses yang cepat, rapi, dan tepat waktu, sehingga website Anda bisa segera online dan siap digunakan untuk bisnis."
    },
    {
      q: "Apa saja yang dibutuhkan untuk memulai proyek website?",
      a: "Untuk memulai proyek website, kami membutuhkan beberapa hal seperti: profil perusahaan (company profile), logo, konten teks untuk setiap halaman, gambar/foto produk atau layanan (jika ada), informasi kontak, dan referensi website yang Anda sukai (opsional). Semakin lengkap informasi yang Anda berikan, semakin baik hasil website yang akan kami buat."
    },
    {
      q: "Bagaimana Anda menjamin kerahasiaan data perusahaan yang sensitif?",
      a: "Kami sangat menjunjung tinggi kerahasiaan data klien. Semua informasi sensitif perusahaan Anda akan dijaga kerahasiaannya dengan ketat. Kami bersedia menandatangani NDA (Non-Disclosure Agreement) jika diperlukan. Data dan informasi Anda tidak akan pernah dibagikan kepada pihak ketiga tanpa izin tertulis dari Anda."
    },
    {
      q: "Apakah jasa ini sudah termasuk domain dan hosting?",
      a: "Ya, paket pembuatan website kami sudah termasuk domain (.com atau .id) dan hosting selama 1 tahun. Setelah tahun pertama, Anda dapat memperpanjang domain dan hosting dengan biaya yang terjangkau. Kami juga akan membantu proses perpanjangan dan memberikan reminder sebelum masa aktif berakhir."
    },
    {
      q: "Apakah tersedia layanan maintenance website?",
      a: "Tentu! Kami menyediakan layanan maintenance website baik bulanan maupun tahunan. Layanan ini mencakup update konten, backup data, security monitoring, bug fixing, dan technical support. Anda juga bisa memilih paket maintenance sesuai kebutuhan bisnis Anda. Tim kami siap membantu memastikan website Anda selalu berjalan optimal."
    }
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      
      {/* Decorative Elements - Minimal dan subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern subtle */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), 
                           linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }} />
        
        {/* Garis vertikal dekoratif */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        
        {/* Titik-titik dekoratif */}
        <div className="absolute top-20 right-20 w-1 h-1 bg-gray-300 rounded-full" />
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-gray-300 rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
        <SectionTitle 
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Temukan jawaban cepat untuk pertanyaan umum seputar layanan kami"
          badge="FAQ"
          centered={true}
          variant="default"
          highlightLastWords={2}
          breakLastWords={1} 
        />
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-3"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border border-gray-200 bg-white hover:border-gray-300 transition-colors duration-300"
            >
              <Accordion 
                question={item.q} 
                answer={item.a} 
                index={index} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions CTA - Desain monokrom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-4 bg-gray-50 border border-gray-200">
            <span className="text-gray-600 text-sm uppercase tracking-wider">
              Masih ada pertanyaan?
            </span>
              <ButtonKonsul
                phone="6289876543210"
                message="Halo, saya tertarik dengan layanan Anda"
                className="relative px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
          </div>
        </motion.div>

        {/* Divider halus */}
        <div className="mt-16 flex justify-center">
          <div className="w-16 h-px bg-gray-200" />
        </div>

      </div>
    </section>
  );
};

export default FAQ;