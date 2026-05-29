import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/sidebar.css'; // will rename internal classes but keep the file

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const Sidebar = ({ data, allData, onProvinceClick, onClose }) => {
  if (!data) return null;

  const otherLocations = allData.filter(item => item.id !== data.id);

  return (
    <div className="detail-container">
      <div className="detail-main-card">
        <button className="sidebar-close-btn" onClick={onClose} aria-label="Đóng">
          <CloseIcon />
        </button>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={data.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="detail-content-wrapper"
          >
            {/* CỘT TRÁI: HÌNH ẢNH */}
            <div className="detail-left-col">
              <div className="detail-image-container">
                <img src={data.image} alt={data.banhMiName} className="detail-image" />
                <div className="detail-image-overlay">
                  <span className="detail-badge">{data.provinceName}</span>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: THÔNG TIN */}
            <div className="detail-right-col">
              <div className="detail-header">ĐẶC SẢN VÙNG MIỀN</div>
              <h2 className="detail-title">{data.banhMiName}</h2>
              
              <div className="detail-desc">
                {data.description}
              </div>
              
              <div className="sidebar-actions">
                <button className="btn-primary">Xem điểm bán</button>
                <button className="btn-outline">
                  <ShareIcon />
                  Chia sẻ
                </button>
              </div>

              {/* Gợi ý khác */}
              <div className="detail-others-section">
                <div className="detail-others-title">Khám phá thêm:</div>
                <div className="detail-others-list">
                  {otherLocations.slice(0, 3).map(item => (
                    <div key={item.id} className="detail-other-item" onClick={() => onProvinceClick(item.id)}>
                      <img src={item.image} alt={item.banhMiName} className="detail-other-img" />
                      <div className="detail-other-info">
                        <span className="detail-other-name">{item.banhMiName.replace('Bánh Mì ', '')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Sidebar;
