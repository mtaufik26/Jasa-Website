import React, { useState } from 'react';

const images = [
  '', // Foto 1
  '', // Foto 1
];

const Showcase = ({ index = 0 }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const imageUrl = images[index] || null;

  const label = `Foto ${index + 1}`;

  const showImage = loaded && !error && imageUrl;

  return (
    <section className="w-full h-screen">
      <div
        className={`w-full h-full flex items-center justify-center relative 
        ${showImage ? '' : 'bg-gray-300'}`}
        style={{
          backgroundImage: showImage
            ? `url("${imageUrl}")`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={label}
            className="hidden"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        )}

        {!showImage && (
          <h1 className="text-4xl font-bold text-gray-600 text-center select-none">
            {label}
          </h1>
        )}
      </div>
    </section>
  );
};

export default Showcase;
