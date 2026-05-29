import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div 
      className="preloader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'var(--bg-app)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <motion.div
        animate={{ 
          rotate: [0, -10, 10, -10, 10, 0],
          scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <img 
          src="/images/icon.jpg" 
          alt="Đang nướng bánh" 
          style={{ width: '200px', height: 'auto', borderRadius: '16px', objectFit: 'contain', boxShadow: '0 10px 30px rgba(200,16,46,0.3)' }} 
        />
      </motion.div>
      <motion.h2 
        style={{ 
          marginTop: '1.5rem', 
          color: 'var(--text-main)',
          fontFamily: 'Be Vietnam Pro, sans-serif'
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Đang nướng bánh... Chờ một chút nhé!
      </motion.h2>
    </motion.div>
  );
};

export default Preloader;
