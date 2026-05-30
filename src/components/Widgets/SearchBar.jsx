import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SearchBar = ({ data, onSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const filteredData = data.filter(item => 
    item.provinceName.toLowerCase().includes(query.toLowerCase()) || 
    item.banhMiName.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    onSelect(id);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <div className="search-input-container">
        <SearchIcon />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Tìm kiếm loại bánh mì bạn yêu thích..." 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      <AnimatePresence>
        {isOpen && query.trim() !== '' && (
          <motion.div 
            className="search-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <div key={item.id} className="search-item" onClick={() => handleSelect(item.id)}>
                  <img src={item.image} alt={item.banhMiName} className="search-item-img" />
                  <div className="search-item-text">
                    <span className="search-item-title">{item.banhMiName}</span>
                    <span className="search-item-sub">{item.provinceName}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="search-item" style={{ color: 'var(--text-muted)' }}>
                Không tìm thấy kết quả phù hợp.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
