import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import VietnamMap from './components/Map/VietnamMap';
import Sidebar from './components/Sidebar/Sidebar'; // Sidebar is now DetailView internally
import QuickStats from './components/Widgets/QuickStats';
import RandomSuggest from './components/Widgets/RandomSuggest';
import SearchBar from './components/Widgets/SearchBar';
import Preloader from './components/Layout/Preloader';
import IntroOverlay from './components/Widgets/IntroOverlay';
import banhMiData from './data/banh-mi-data.json';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/main.css';
import './styles/widgets.css';

function App() {
  const [activeProvinceId, setActiveProvinceId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const playCrunchSound = () => {
    // Sound effect URL
    const crunch = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_247e33e3ed.mp3');
    crunch.volume = 0.5;
    crunch.play().catch(e => console.log('Audio play failed: ', e));
  };

  const handleProvinceClick = (provinceId) => {
    playCrunchSound();
    setActiveProvinceId(provinceId);
  };

  const handleClose = () => {
    setActiveProvinceId(null);
  };

  const activeData = banhMiData.find(p => p.id === activeProvinceId);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      <AnimatePresence>
        {showIntro && <IntroOverlay onClose={() => setShowIntro(false)} />}
      </AnimatePresence>
      
      <div className="app-container">
        {/* KHU VỰC ẢNH NHÓM (HERO SECTION) */}
        <div className="hero-section">
          <div className="hero-parallax-bg"></div>
        </div>

        <Navbar onIntroClick={() => setShowIntro(true)} />
        
        <main className="main-wrapper">
          <AnimatePresence mode="wait">
            {activeProvinceId ? (
              <motion.div 
                key="detail-view"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <Sidebar 
                  data={activeData} 
                  allData={banhMiData}
                  onProvinceClick={handleProvinceClick}
                  onClose={handleClose}
                />
              </motion.div>
            ) : (
              <motion.div 
                key="map-layout"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="map-layout-wrapper"
              >
                {/* CỘT TRÁI: THỐNG KÊ (flex: 3) */}
                <div className="map-layout-left">
                  <QuickStats />
                </div>
                
                {/* CỘT GIỮA: MAP & SEARCH (flex: 6) */}
                <div className="map-layout-center">
                  <SearchBar data={banhMiData} onSelect={handleProvinceClick} />
                  <div style={{ flex: 1 }}>
                    <VietnamMap 
                      banhMiData={banhMiData}
                      activeProvinceId={activeProvinceId}
                      onProvinceClick={handleProvinceClick}
                    />
                  </div>
                </div>

                {/* CỘT PHẢI: GỢI Ý (flex: 3) */}
                <div className="map-layout-right">
                  <RandomSuggest allData={banhMiData} onSelect={handleProvinceClick} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
