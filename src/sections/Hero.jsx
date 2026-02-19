// Hero.jsx
import React from 'react';
import ButtonKonsul from '../components/ui/ButtonKonsul';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <div className="absolute top-36 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-28 lg:left-56">
        <div className="bg-gradient-to-b from-white to-gray-50 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
          <span className="text-xs sm:text-sm text-gray-700 font-medium">Desain Eksklusif</span>
        </div>
      </div>

      <div className="absolute top-32 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-24 lg:right-64">
        <div className="bg-gradient-to-b from-white to-gray-50 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
          <span className="text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">Cepat, Ringan, Optimal</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Jasa Pembuatan Website <br/>
            <span className="sm:hidden"> </span>
            Custom Profesional, Tanpa Ribet
          </h1>

          <p className="text-sm sm:text-base lg:text-base text-gray-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Dapatkan website custom profesional tanpa repot coding dan<br className="hidden sm:block" />
            maintenance. Kami urus seluruh proses, mulai dari strategi, desain,<br className="hidden sm:block" />
            hingga optimasi berkelanjutan.
          </p>

          <div className="flex justify-center">
            <ButtonKonsul
              phone="6289876543210"
              message="Halo, saya tertarik dengan layanan Anda"
            />
          </div>
          
        </div>
      </div>

      <div className="absolute bottom-36 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-36 lg:left-80">
        <div className="bg-gradient-to-b from-white to-gray-50 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
          <span className="text-xs sm:text-sm text-gray-700 font-medium">Siap Pakai</span>
        </div>
      </div>

      <div className="absolute bottom-32 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-32 lg:right-72">
        <div className="bg-gradient-to-b from-white to-gray-50 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
          <span className="text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">Fokus Pada Konversi</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;