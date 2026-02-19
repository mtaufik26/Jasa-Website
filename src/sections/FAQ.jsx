// FAQ.jsx
import SectionTitle from '../components/ui/SectionTitle';
import Accordion from '../components/Accordion';

const FAQ = () => {
  const faqData = [
    {
      q: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu Website?",
      a: "Pengerjaan website sangat fleksibel sesuai kebutuhan Anda. Untuk landing page atau website 1 halaman, kami dapat menyelesaikannya mulai dari 1-3 hari. Sedangkan untuk website company profile dengan struktur lebih lengkap, rata-rata hanya membutuhkan waktu sekitar 1-3 minggu termasuk revisi. Kami fokus pada proses yang cepat, rapi, dan tepat waktu, sehingga website Anda bisa segera online dan siap digunakan untuk bisnis."
    },
    {
      q: "Apa saja yang dibutuhkan Bata Kreatif untuk memulai proyek website?",
      a: "Untuk memulai proyek website, kami membutuhkan beberapa hal seperti: profil perusahaan (company profile), logo, konten teks untuk setiap halaman, gambar/foto produk atau layanan (jika ada), informasi kontak, dan referensi website yang Anda sukai (opsional). Semakin lengkap informasi yang Anda berikan, semakin baik hasil website yang akan kami buat."
    },
    {
      q: "Bagaimana Bata Kreatif menjamin kerahasiaan data perusahaan yang sensitif?",
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
    <section className="bg-gray-200 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="FAQ" 
          subtitle="Butuh info? Lihat pertanyaan dan jawaban yang sering diajukan."
        />
        
        <div className="bg-gray-200">
          {faqData.map((item, index) => (
            <Accordion key={index} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQ;