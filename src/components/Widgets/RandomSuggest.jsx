import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const RandomSuggest = ({ allData, onSelect }) => {
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    // Chọn 1 món ngẫu nhiên ban đầu
    const pickRandom = () => {
      const randomIndex = Math.floor(Math.random() * allData.length);
      setRandomItem(allData[randomIndex]);
    };
    pickRandom();
    
    // Tự động đổi ngẫu nhiên mỗi 8 giây
    const interval = setInterval(pickRandom, 8000);
    return () => clearInterval(interval);
  }, [allData]);

  if (!randomItem) return null;

  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} style={{ width: '100%' }}>
      <motion.div 
        className="widget-card hover-lift" 
        layout
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.4 }}
      >
        <div className="badge-wrapper">
          <span className="badge-new">GỢI Ý</span>
        </div>
        <h3 className="widget-title" style={{ marginTop: '0.5rem' }}>{randomItem.banhMiName}</h3>
        <div className="widget-subtitle">{randomItem.provinceName}</div>
        
        <div style={{ position: 'relative', width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', margin: '1rem 0' }}>
          <img 
            src={randomItem.image} 
            alt={randomItem.banhMiName} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        
        <button 
          className="btn-primary" 
          style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
          onClick={() => onSelect(randomItem.id)}
        >
          Khám phá ngay
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </motion.div>
    </Tilt>
  );
};

export default RandomSuggest;
