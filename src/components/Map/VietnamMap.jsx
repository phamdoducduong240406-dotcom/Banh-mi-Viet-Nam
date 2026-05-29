import React from 'react';
import Marker from './Marker';
import '../../styles/map.css';

const VietnamMap = ({ banhMiData, activeProvinceId, onProvinceClick }) => {
  return (
    <>
      <div className="map-container">
        <div className="map-wrapper">
          <img 
            src="/images/VN.png" 
            alt="Bản đồ Việt Nam" 
            className="vietnam-svg"
          />

          {banhMiData.map((province) => (
            <Marker 
              key={province.id}
              id={province.id}
              name={province.provinceName}
              coordinates={province.coordinates}
              isActive={activeProvinceId === province.id}
              onClick={onProvinceClick}
            />
          ))}
        </div>
      </div>
      
      <div className="regions-filter">
        <button className="region-btn">
          <img src="/images/hn.webp" alt="Miền Bắc" className="region-icon" />
          <div className="region-text">
            <span>Hương vị Miền Bắc</span>
            <span className="region-subtitle">(Hà Nội)</span>
          </div>
        </button>
        <button className="region-btn">
          <img src="/images/hue.webp" alt="Miền Trung" className="region-icon" />
          <div className="region-text">
            <span>Mùi thơm Miền Trung</span>
            <span className="region-subtitle">(Đà Nẵng / Huế)</span>
          </div>
        </button>
        <button className="region-btn">
          <img src="/images/hcm.webp" alt="Miền Nam" className="region-icon" />
          <div className="region-text">
            <span>Đa dạng Miền Nam</span>
            <span className="region-subtitle">(TP.HCM)</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default VietnamMap;
