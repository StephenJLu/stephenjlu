import React from 'react';
import styles from './polaroidImage.module.css';
import polaroidFrame from './polaroid.png'; // Ensure the file exists in the correct path

interface PolaroidImageProps {
  imageUrl: string;
  rotation?: number;
  caption?: string;
}
const PolaroidImage: React.FC<PolaroidImageProps> = ({
  imageUrl,
  rotation = 0,
  caption = 'Test Caption',  
}) => {
  return (
    <div className={styles.polaroid} style={{ transform: `rotate(${rotation}deg)` }}>
      <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }} />
      {caption && <div className={styles.caption}>{caption}</div>}
      <div
        className={styles.frame}
        style={{ backgroundImage: `url(${polaroidFrame})` }}
      />
    </div>
  );
};

export default PolaroidImage;