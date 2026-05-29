import React from 'react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
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
        <span className="nav-link">Đóng góp</span>
        <span className="nav-separator">|</span>
        <span className="nav-link">Giới thiệu</span>
        
        <button className="theme-toggle-btn" onClick={toggleDarkMode} aria-label="Toggle Dark Mode" style={{ marginLeft: '1rem', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--primary)' }}>
          {isDarkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
