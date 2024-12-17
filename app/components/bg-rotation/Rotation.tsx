import React, { useEffect } from 'react';

const Rotation: React.FC = () => {
  useEffect(() => {
    const applyRotation = () => {
      const randomRotationBefore = Math.floor(Math.random() * 360);
      const randomRotationAfter = Math.floor(Math.random() * 360);

      const styleElement = document.createElement('style');
      styleElement.innerHTML = `
        body::before {
          transform: rotate(${randomRotationBefore}deg);
        }
        body::after {
          transform: rotate(${randomRotationAfter}deg);
        }
      `;
      document.head.appendChild(styleElement);
    };

    applyRotation();
  }, []);

  return null; // This component does not render anything
};

export default Rotation;