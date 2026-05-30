import React from 'react';

const Navbar = ({ onIntroClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <svg className="nav-logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <div className="nav-titles">
          <span className="nav-title">BẢN ĐỒ BÁNH MÌ VIỆT NAM</span>
          <span className="nav-subtitle">Khám phá hương vị đặc trưng qua từng vùng miền</span>
        </div>
      </div>
      
      <div className="nav-links">
        <span className="nav-link">Miền Bắc</span>
        <span className="nav-separator">|</span>
        <span className="nav-link">Miền Trung</span>
        <span className="nav-separator">|</span>
        <span className="nav-link">Miền Nam</span>
        <span className="nav-separator">|</span>
        <span className="nav-link" onClick={onIntroClick}>Giới thiệu</span>
      </div>
    </nav>
  );
};

export default Navbar;
