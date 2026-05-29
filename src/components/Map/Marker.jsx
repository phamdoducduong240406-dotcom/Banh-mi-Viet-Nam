import React from 'react';

const Marker = ({ id, name, coordinates, isActive, onClick }) => {
  return (
    <div 
      className={`marker-container ${isActive ? 'active' : ''}`}
      style={{ left: `${coordinates.x}%`, top: `${coordinates.y}%` }}
      onClick={() => onClick(id)}
    >
      <div className="marker-label">{name}</div>
      {/* We use an SVG for the marker to mimic the one the user provided: a red pin with a yellow star inside a circle */}
      <svg className="marker-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C25 0 5 20 5 45c0 30 45 55 45 55s45-25 45-55C95 20 75 0 50 0z" fill="#E53935"/>
        <circle cx="50" cy="40" r="28" fill="#FFF"/>
        <circle cx="50" cy="40" r="24" fill="#E53935"/>
        {/* Yellow Star */}
        <polygon points="50,22 56,34 68,36 60,45 62,58 50,52 38,58 40,45 32,36 44,34" fill="#FFEB3B"/>
      </svg>
    </div>
  );
};

export default Marker;
