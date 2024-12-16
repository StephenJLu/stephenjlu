import React, { useEffect, useState } from 'react';

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

  return <span style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s' }}>{fadeText}</span>;
};

export default TextFade;