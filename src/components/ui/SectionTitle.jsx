import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div style={{ 
      marginBottom: '40px', 
      textAlign: centered ? 'center' : 'left',
      maxWidth: '800px',
      marginRight: 'auto',
      marginLeft: 'auto'
    }}>
      {/* Judul Utama */}
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: '700', 
        color: '#1a1a1a',
        marginBottom: '10px' 
      }}>
        {title}
      </h2>
      {/* Subjudul */}
      {subtitle && (
        <p style={{ 
          fontSize: '1rem', 
          color: '#666', 
          lineHeight: '1.6' 
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;