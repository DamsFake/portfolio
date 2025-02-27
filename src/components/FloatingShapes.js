import React, { useEffect, useState } from 'react';
import './FloatingShapes.css';

const FloatingShapes = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const newShapes = [];
    for (let i = 0; i < 10; i++) {
      newShapes.push({
        id: i,
        size: Math.random() * 100 + 50,
        posX: Math.random() * 100,
        posY: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
      });
    }
    setShapes(newShapes);
  }, []);

  return (
    <div className="floating-shapes">
      {shapes.map(shape => (
        <div
          key={shape.id}
          className="shape"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.posX}%`,
            top: `${shape.posY}%`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
