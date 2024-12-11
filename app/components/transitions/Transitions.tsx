import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './transitions.module.css';

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  onInViewChange?: (inView: boolean) => void;
}

const InView: React.FC<InViewProps> = ({ children, className = '', onInViewChange }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (onInViewChange) {
      onInViewChange(inView);
    }
  }, [inView, onInViewChange]);

  return (
    <div ref={ref} className={`${className} ${styles.transition} ${inView ? styles.inView : ''}`}>
      {children}
    </div>
  );
};

export default InView;