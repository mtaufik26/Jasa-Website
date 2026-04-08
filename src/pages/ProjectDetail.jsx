import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line
import SectionWrapper from '../components/layout/SectionWrapper';
import Container from '../components/layout/Container';
import ButtonBack from '../components/ui/ButtonBack';
import { detailsData } from '../data/DetailsData';
import { fadeInUp, staggerContainer } from '../animations/variants';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = detailsData.find(item => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <SectionWrapper className="pt-20 pb-32 flex items-center justify-center min-h-[60vh]">
        <Container className="text-center">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">Project tidak ditemukan</h2>
          <button 
            onClick={() => navigate('/detail')}
            className="text-sm border-b border-gray-900 pb-1 hover:text-gray-600 transition-colors"
          >
            Kembali ke Daftar Project
          </button>
        </Container>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper className="pt-8 sm:pt-12 pb-20 sm:pb-24 lg:pb-32 bg-white" withPattern={false}>
      <Container>
        {/* Header & Back Button */}
        <div className="relative mb-10 h-10 flex items-center">
          <div className="absolute left-0 z-10">
            <ButtonBack />
          </div>
        </div>

        <motion.div 
          className="max-w-5xl mx-auto"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
        >
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content: Title & Text */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-block mb-4">
                <span className="text-xs font-medium tracking-widest text-gray-400 uppercase bg-gray-100 px-3 py-1 rounded-full">
                  Detail Proyek
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-light">
                {project.fullDescription || project.description}
              </p>
              
              {project.client && (
                <div className="mb-8 p-5 bg-gray-50 border-l-4 border-gray-900 hidden sm:block">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Target Pengguna</h4>
                  <p className="text-gray-900 font-medium">{project.client}</p>
                </div>
              )}
            </motion.div>

            {/* Right Content: Image */}
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <div className="aspect-[4/3] sm:aspect-video lg:aspect-[4/3] w-full overflow-hidden bg-gray-50 relative group border border-gray-100 shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </motion.div>

          </div>

          {/* Details & Features Grid */}
          <motion.div 
            variants={fadeInUp} 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 sm:mt-24 pt-16 border-t border-gray-100"
          >
            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-gray-300"></span>
                  Fitur Utama
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-gray-300"></span>
                  Teknologi Yang Digunakan
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 border border-gray-200 text-gray-700 text-sm hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

export default ProjectDetail;
