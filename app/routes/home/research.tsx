import React, { useState, useEffect } from 'react';
import { Section } from '~/components/section/section';
import { DecoderText } from '~/components/decoder-text/decoder-text';
import { Transition } from '~/components/transition/transition';
import { Divider } from '~/components/divider/divider';
import InViewport from '~/components/in-viewport/InViewport';
import { Image } from '~/components/image/image';
import { Button } from '~/components/button/button';
import styles from './research.module.css';
import banner from 'app/static/images/research.png';
import bannerFull from 'app/static/images/researchfull.png';
import bannerPlaceholder from 'app/static/images/research-placeholder.svg';
import publicCV from '/docs/lu-cv-public.pdf';
import ResearchText from './ResearchText';
interface ResearchProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface ResearchComponentProps extends ResearchProps {
  visible: boolean;  
}


interface ResearchComponentProps extends ResearchProps {
  visible: boolean;}

export const Research = ({ id, visible, sectionRef }: ResearchComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const titleId = `${id}-title`;  
  
  return (
    <Section       
      className={styles.research}
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
            <div className={styles.backgroundImage} data-visible={visible} ref={nodeRef}>
        <Image                    
          src={bannerFull}          
          srcSet={`${banner} 768w, ${bannerFull} 1440w`}
          placeholder={bannerPlaceholder}
          width={1471}
          height={800}
          sizes={`(max-width: 768px) 100vw, 1440px`}                     
          alt="Research banner"
          role="presentation"
          loading="lazy"
          loaded={visible}
          onLoad={() => console.log('Research banner loaded.')}
          onError={() => console.error('Failed to load Research banner image.')}
        />
        <div className={styles.gradient} data-visible={visible}/>
      </div>
      <div className={styles.content} data-visible={visible}>
              <div className={styles.tag} aria-hidden>
                <Divider                                    
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
                          text={'Research Experience'}
                          delay={1600}
                        />
                      )}
                    </div>
                  );
                }}
                </InViewport>            
              </div>
                <ResearchText visible={visible} titleId={titleId} />
                  <Button iconHoverShift href={publicCV} target="_blank" rel="noopener noreferrer" iconEnd="copy" download="Lu - Public CV.pdf">
                              {'Download CV'}
                  </Button>
              </div>          
          </>
        )}        
      </Transition>
    </Section>
  );
};
