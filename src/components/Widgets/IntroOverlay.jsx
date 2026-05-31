import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/intro.css';

const IntroOverlay = ({ onClose }) => {
  const [isSplit, setIsSplit] = useState(false);

  useEffect(() => {
    // Tự động cắt sau 0.5s để người dùng kịp nhìn thấy bánh mì nguyên vẹn 1 chút
    const timer = setTimeout(() => {
      setIsSplit(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="intro-overlay-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Nút đóng */}
      <button className="intro-close-btn" onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Nội dung bên dưới (Ảnh giới thiệu) */}
      <div className="intro-content">
        <motion.img 
          src="/images/gioithieu.png" 
          alt="Giới thiệu" 
          className="intro-image" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: isSplit ? 1 : 0.8, opacity: isSplit ? 1 : 0 }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        />
      </div>

      {/* Nửa trên của ảnh bánh mì (Cắt chéo) */}
      <motion.div 
        className="banhmi-half banhmi-top"
        animate={{ 
          y: isSplit ? '-100vh' : 0,
          x: isSplit ? '-5vw' : 0,
          rotate: isSplit ? -5 : 0
        }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
      />

      {/* Nửa dưới của ảnh bánh mì (Cắt chéo) */}
      <motion.div 
        className="banhmi-half banhmi-bottom"
        animate={{ 
          y: isSplit ? '100vh' : 0,
          x: isSplit ? '5vw' : 0,
          rotate: isSplit ? 5 : 0
        }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
      />
    </motion.div>
  );
};

export default IntroOverlay;
