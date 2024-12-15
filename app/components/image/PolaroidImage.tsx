import React from 'react';
import { ImageProps } from './image';
import styles from './polaroidImage.module.css';
import polaroidFrame from '../../static/images/polaroid.png';

interface PolaroidImageProps extends ImageProps {
    imageUrl: string; 
    rotation?: number;  
}

const PolaroidImage: React.FC<PolaroidImageProps> = ({
  imageUrl,
  rotation = -12,
  
}) => {
  return (
    <div className={styles.polaroid} style={{ transform: `rotate(${rotation}deg)` }}>
      <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }} />
        <div
          className={styles.frame}
          style={{ backgroundImage: `url(${polaroidFrame})`}}
        />        
    </div>
  );
};

export default PolaroidImage;