// Services.jsx
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ButtonKonsul from '../components/ui/ButtonKonsul';

const Services = () => {
  // Data untuk Section 1 - Jenis Website
  const jenisWebsiteImages = [
    '', // Foto 1
    '', // Foto 2
    ''  // Foto 3
  ];

  // Data untuk Section 2 - Company Profile
  const companyProfileImages = [
    '', // Foto 1
    '', // Foto 2
    ''  // Foto 3
  ];

  // Data untuk Section 3 - Apa yang Anda Dapatkan
  const benefitImages = [
    '', // Foto 1
    '', // Foto 2
    '', // Foto 3
    '', // Foto 4
    '', // Foto 5
    ''  // Foto 6
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Jenis Website */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <SectionTitle 
            title="Jenis website apa yang kami sediakan?"
          />
          
          <p className="text-center text-gray-600 text-sm sm:text-base max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
            Dibawah ini adalah beberapa jenis website yang biasa kami kerjakan. 
            Namun jangan khawatir, jika Anda memiliki ide website custom, kami juga bisa mewujudkannya. 
            Silakan konsultasikan kebutuhan website Anda kepada kami.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
            {jenisWebsiteImages.map((src, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden shadow-lg ${
                  index === 1 
                    ? 'transform scale-100 sm:scale-105 z-10 shadow-2xl' 
                    : 'transform scale-95 sm:scale-90 opacity-90'
                }`}
              >
                {src ? (
                  <img 
                    src={src} 
                    alt={`Jenis Website ${index + 1}`}
                    className="w-full h-48 sm:h-56 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-48 sm:h-56 lg:h-72 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">Foto {index + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Company Profile */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6">
            Company Profile
          </h2>
          
          <p className="text-center text-gray-600 text-sm sm:text-base max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Website company profile adalah website yang dibuat untuk menampilkan profil perusahaan, 
            produk atau layanan, serta informasi lainnya yang berkaitan dengan perusahaan. 
            Website ini biasanya digunakan untuk membangun kredibilitas dan kepercayaan pelanggan terhadap bisnis Anda.
          </p>

          <div className="text-center mb-6 sm:mb-8">
            <ButtonKonsul
              phone="6289876543210"
              message="Halo, saya tertarik dengan layanan Anda"
            />
          </div>

          <p className="text-center text-gray-700 font-medium text-sm sm:text-base mb-6 sm:mb-8">
            Contoh Web Company Profile
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {companyProfileImages.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                {src ? (
                  <img 
                    src={src} 
                    alt={`Company Profile ${index + 1}`}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">Foto {index + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Apa yang Anda Dapatkan */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <SectionTitle 
            title="Apa yang Anda Dapatkan"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            {benefitImages.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                {src ? (
                  <img 
                    src={src} 
                    alt={`Benefit ${index + 1}`}
                    className="w-full h-40 sm:h-48 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-40 sm:h-48 lg:h-72 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">Foto {index + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-4">
          <SectionTitle 
            title="Ingin punya web company profile berkualitas?" 
          />
          
          <div className="flex justify-center mt-4 sm:mt-6">
            <ButtonKonsul
              phone="6289876543210"
              message="Halo, saya tertarik dengan layanan Anda"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;