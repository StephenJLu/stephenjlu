import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface InViewportProps {
  children: (isInViewport: boolean) => ReactNode;
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
      observer.disconnect();
    };
  }, []);

  const childElement = children(isInViewport);

  if (React.isValidElement(childElement)) {
    return React.cloneElement(childElement, {
      ref: elementRef,
    } as React.Attributes);
  }

  return <div ref={elementRef}>{childElement}</div>;
};

export default InViewport;