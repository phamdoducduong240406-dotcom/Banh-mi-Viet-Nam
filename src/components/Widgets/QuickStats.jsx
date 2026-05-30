import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const funFacts = [
  "Bánh mì Việt Nam chính thức được ghi vào từ điển Oxford ngày 24/03/2011.",
  "Bánh mì xuất phát từ bánh mì Baguette của Pháp nhưng được người Việt biến tấu nhỏ hơn, vỏ giòn hơn và ruột xốp hơn.",
  "Bánh mì Hội An từng được đầu bếp Anthony Bourdain ca ngợi là 'Bánh mì ngon nhất thế giới'.",
  "Năm 2020, Google Doodle đã vinh danh Bánh mì Việt Nam trên trang chủ công cụ tìm kiếm ở hơn 10 quốc gia."
];

const QuickStats = () => {
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 5000); // Change fact every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="widget-card hover-lift" 
      layout
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="badge-wrapper">
        <span className="badge-new">THỐNG KÊ NHANH</span>
      </div>
      <h3 className="widget-title" style={{ marginTop: '0.5rem' }}>Dữ liệu Toàn quốc</h3>
      <div className="widget-subtitle">Đa dạng & Phong phú</div>
      
      <div className="bento-grid">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500}>
          <div className="stat-box" style={{ height: '100%' }}>
            <span className="stat-number">34+</span>
            <span className="stat-label">Đặc sản bánh mì</span>
          </div>
        </Tilt>
        
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500}>
          <div className="stat-box" style={{ height: '100%' }}>
            <span className="stat-number">3</span>
            <span className="stat-label">Miền Bắc, Trung, Nam</span>
          </div>
        </Tilt>
        
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2500} style={{ gridColumn: 'span 2' }}>
          <div className="fun-fact-box" style={{ height: '100%', gridColumn: 'auto' }}>
            <div className="fun-fact-title">💡 Bạn có biết?</div>
            <div className="fun-fact-content">
              {funFacts[factIndex]}
            </div>
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
};

export default QuickStats;
