import React, { useState, useEffect } from 'react';
import { Section } from '~/components/section/section';
import { DecoderText } from '~/components/decoder-text/decoder-text';
import { Transition } from '~/components/transition/transition';
import { Divider } from '~/components/divider/divider';
import InViewport from '~/components/in-viewport/InViewport';
import styles from './content.module.css';

import { default as ContentText } from './ContentText';

interface ContentProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface ContentComponentProps extends ContentProps {
  visible: boolean;  
}


interface ContentComponentProps extends ContentProps {
  visible: boolean;}

export const Content = ({ id, visible, sectionRef }: ContentComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const titleId = `${id}-title`;  
  
  return (
    <Section       
      className={styles.content}
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
              <div className={styles.tag} aria-hidden>
                <Divider                  
                  notchWidth="50%"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <InViewport>
                {(inViewport) => {
                  useEffect(() => {
                    if (inViewport) {
                      setIsInViewport(true);
                    }
                  }, [inViewport]);
                  return (
                    <div className={styles.tagText} data-visible={visible}>
                      {isInViewport && (
                        <DecoderText
                          text={'Music Production Uses'}
                          delay={1600}
                        />
                      )}
                    </div>
                  );
                }}
                </InViewport>            
              </div>
                <ContentText visible={visible} titleId={titleId} />          
          </>
        )}        
      </Transition>
    </Section>
  );
};
