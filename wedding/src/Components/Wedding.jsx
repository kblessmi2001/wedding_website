import React, { useEffect, useState } from 'react';
import './Wedding.css';

const Wedding = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wedding-container">
      <div className="diamond-gif" style={{ transform: `translateY(${scrollPosition}px)` }} />
      <div className="vertical-line" style={{ height: `${scrollPosition}px` }} />
      {/* Your wedding content goes here */}
    </div>
  );
};

export default Wedding;
