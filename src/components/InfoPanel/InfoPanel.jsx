import React, { useEffect, useState } from 'react';
import { X, MapPin } from 'lucide-react';

const InfoPanel = ({ data, isOpen, onClose }) => {
  const [contentKey, setContentKey] = useState(0);

  // Re-trigger animation when data changes
  useEffect(() => {
    if (data) {
      setContentKey(prev => prev + 1);
    }
  }, [data]);

  return (
    <div className={`panel-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <button className="panel-close-btn" onClick={onClose} aria-label="Close panel">
          <X size={24} />
        </button>
      )}

      {!data && isOpen && (
        <div className="panel-empty">
          <MapPin size={48} />
          <p>Vui lòng chọn một tỉnh thành trên bản đồ<br/>để xem chi tiết về bánh mì.</p>
        </div>
      )}

      {data && (
        <div className="panel-content fade-in" key={contentKey}>
          <div className="panel-image-wrapper">
            {/* If image exists, it shows, otherwise fallback to CSS background pattern */}
            {data.image ? (
              <img src={data.image} alt={data.banhMiName} className="panel-image" onError={(e) => { e.target.style.display = 'none'; }} />
            ) : (
              <div className="image-placeholder-pattern"></div>
            )}
            <div className="image-overlay">
              <span className="province-badge">{data.provinceName}</span>
              <h2 className="banh-mi-title">{data.banhMiName}</h2>
            </div>
          </div>
          
          <div className="panel-details">
            <div className="ingredients-section fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="section-title">Nguyên Liệu Đặc Trưng</h3>
              <div className="ingredients-list">
                {data.ingredients.map((ingredient, index) => (
                  <span key={index} className="ingredient-tag">{ingredient}</span>
                ))}
              </div>
            </div>

            <div className="description-section fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="section-title">Câu Chuyện Hương Vị</h3>
              <p className="description-text">{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPanel;
