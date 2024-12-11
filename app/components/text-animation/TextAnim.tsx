import React, { useEffect, useState } from 'react';
import styles from './textAnim.module.css'

interface TextAnimProps {
  typeText: string;
  delay?: number;
}

const TextAnim: React.FC<TextAnimProps> = ({ typeText, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => (prev < typeText.length ? prev + 1 : prev));
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [typeText, delay]);

  return <span className={styles.typingText}>{typeText.slice(0, count)}</span>;
};

export default TextAnim;