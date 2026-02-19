// Workflow.jsx
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Workflow = () => {
  const workflowSteps = [
    {
      step: 1,
      title: 'Konsultasi',
      description: 'Diskusikan kebutuhan website Anda bersama tim kami',
      image: '',
    },
    {
      step: 2,
      title: 'Desain & Development',
      description: 'Kami membuat desain dan mengembangkan website Anda',
      image: '',
    },
    {
      step: 3,
      title: 'Review & Revisi',
      description: 'Anda review hasil kerja kami dan kami lakukan revisi jika perlu',
      image: '',
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'Website diluncurkan dan kami berikan dukungan berkelanjutan',
      image: '',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Alur ringkas. Proses cepat tuntas. Bisnis Anda naik kelas.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Di zaman yang serba cepat, kami mengadaptasi proses kerja kami supaya Anda dapat segera melesatkan 
            bisnis Anda ke level selanjutnya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {workflowSteps.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-gray-300 rounded-xl h-48 lg:h-56 w-full mb-4 flex items-center justify-center overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 font-medium text-sm lg:text-base">
                    Foto {item.step}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full text-sm font-semibold">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;