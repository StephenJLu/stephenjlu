import React, { useEffect, useState } from 'react';
import styles from './textFade.module.css';

interface TextFadeProps {
  fadeText: string;
  delay?: number;
}

const TextFade: React.FC<TextFadeProps> = ({ fadeText, delay = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <span className={`${styles.textFade} ${visible ? styles.visible : ''}`}>{fadeText}</span>;
};

export default TextFade;