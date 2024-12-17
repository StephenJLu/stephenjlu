import React from 'react';
import styles from './polaroidImage.module.css';
import polaroidFrame from './polaroid.png'; // Ensure the file exists in the correct path

interface PolaroidImageProps {
  imageUrl: string;
  rotation?: number;
}
const PolaroidImage: React.FC<PolaroidImageProps> = ({
  imageUrl,
  rotation = 0,  
}) => {
  return (
    <div className={styles.polaroid} style={{ transform: `rotate(${rotation}deg)` }}>
      <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }} />
      <div
        className={styles.frame}
        style={{ backgroundImage: `url(${polaroidFrame})` }}
      />
    </div>
  );
};

export default PolaroidImage;