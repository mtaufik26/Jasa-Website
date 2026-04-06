import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/layout/SectionWrapper';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import ButtonBack from '../components/ui/ButtonBack';
import { fadeInUp, staggerContainer } from '../animations/variants';
import { detailsData } from '../data/DetailsData';

const DetailsCard = ({ item }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group flex flex-col bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300 overflow-hidden"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 relative">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-1 h-full">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 transition-colors group-hover:text-black">
          {item.title}
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
          {item.description}
        </p>

        <div className="mt-auto pt-2">
          <a 
            href={item.link} 
            className="inline-flex items-center justify-center w-10 h-10 border border-gray-200 text-gray-600 group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all duration-300"
            aria-label={`Lihat detail untuk ${item.title}`}
          >
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transform group-hover:translate-x-0.5 transition-transform duration-300"
            >
               <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Details = () => {
  return (
    <SectionWrapper className="pt-8 sm:pt-12 pb-20 sm:pb-24 lg:pb-32 bg-gray-50/50" withPattern={true}>
      <Container>
        <div className="relative">
          <div className="md:absolute left-0 top-0 md:top-1 z-10 mb-6 md:mb-0">
            <ButtonBack />
          </div>
          <SectionTitle 
            title="Solusi Digital Terpadu" 
            subtitle="Setiap bisnis memiliki keunikan. Kami menghadirkan solusi yang secara spesifik dirancang untuk memaksimalkan potensi digital model bisnis Anda."
            badge="Layanan Kami"
            centered={true}
          />
        </div>

        <motion.div 
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-16"
        >
          {detailsData.map((item) => (
            <DetailsCard key={item.id} item={item} />
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

export default Details;
