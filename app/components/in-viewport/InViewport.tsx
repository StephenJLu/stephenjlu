import React, { useEffect, useRef, useState, ReactElement } from 'react';

interface InViewportProps {
  children: (isInViewport: boolean) => ReactElement;
}

const InViewport: React.FC<InViewportProps> = ({ children }) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const childElement = children(isInViewport);

  return React.cloneElement(childElement, { ref: elementRef });
};

export default InViewport;