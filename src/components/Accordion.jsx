// Accordion.jsx
import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-400 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left py-4 transition-all duration-300 ${
          isOpen ? 'bg-transparent' : 'hover:bg-gray-100'
        }`}
      >
        <div className={`flex justify-between items-center ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
          <span className="text-base lg:text-lg font-medium pr-4">
            {question}
          </span>
          <span className={`text-2xl font-light flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
            {isOpen}
          </span>
        </div>
      </button>
      
      {isOpen && (
        <div className="pb-6 animate-fadeIn">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-200">
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;