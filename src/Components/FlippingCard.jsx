import React, { useState } from 'react';
import { useTheme } from "../Context/ThemeContext";

const FlippingCard = ({ imagePath, jobRole }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDarkTheme } = useTheme();

  return (
    <div
      className="w-64 h-80"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded-xl shadow-lg overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        >
          <img
            src={imagePath}
            alt="Person"
            className="w-full h-full object-cover rounded-xl"
          />
          <div
            className="absolute bottom-0 w-full text-center py-2 text-sm font-medium"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              backdropFilter: 'blur(2px)',
            }}
          >
            {jobRole}
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full flex items-center justify-center text-xl font-semibold rounded-xl shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            backgroundColor: 'var(--card-bg)',
            color: 'var(--body_clr)',
          }}
        >
          {jobRole}
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
