import React, { useEffect, useRef } from 'react';

const ParallaxElement = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleMouseMove = (e) => {
      if (!element) return;

      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      const offsetX = (mouseX - 0.5) * 20;
      const offsetY = (mouseY - 0.5) * 20;

      element.style.setProperty('--parallax-offset', `${offsetY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={elementRef} className="parallax">
      {children}
    </div>
  );
};

export default ParallaxElement;
