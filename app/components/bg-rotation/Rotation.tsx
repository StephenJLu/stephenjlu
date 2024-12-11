import React, { useEffect } from 'react';

const Rotation: React.FC = () => {
  useEffect(() => {
    const applyRotation = () => {
      const elements = document.querySelectorAll('body::before, body::after');
      elements.forEach((element) => {
        const randomRotation = Math.floor(Math.random() * 360);
        (element as HTMLElement).style.transform = `rotate(${randomRotation}deg)`;
      });
    };

    applyRotation();
  }, []);

  return null; // This component does not render anything
};

export default Rotation;