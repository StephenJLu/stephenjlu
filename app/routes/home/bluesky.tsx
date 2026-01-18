import React, { useState, useEffect } from 'react';
import { Section } from '~/components/section/section';
import { Transition } from '~/components/transition/transition';
import styles from './bluesky.module.css';
import { default as BlueSkyText } from './BlueSkyText';

interface BlueSkyProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface BlueSkyComponentProps extends BlueSkyProps {
  visible: boolean;  
}

export const BlueSky = ({ id, visible, sectionRef }: BlueSkyComponentProps) => {  
  const [focused, setFocused] = useState(false);  
  const titleId = `${id}-title`;  
  
  useEffect(() => {
    // Dynamically load bsky-embed script if not already loaded
    const scriptId = 'bsky-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'module';
      script.src = 'https://cdn.jsdelivr.net/npm/bsky-embed/dist/bsky-embed.es.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  
  return (
    <Section       
      className={styles.bluesky}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}  
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}      
      >        
        <Transition in={visible || focused} timeout={0} unmount={false}>
          {({ visible, nodeRef }: { visible: boolean; nodeRef: React.RefObject<HTMLDivElement> }) => (
            <>
              <div data-visible={visible} ref={nodeRef} />                     
              <div className={styles.content} data-visible={visible}>                
                <BlueSkyText visible={visible} titleId={titleId} />  
              </div>        
            </>
          )}        
        </Transition>
    </Section>
  );
};
