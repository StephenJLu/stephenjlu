import React, { useState, useEffect } from 'react';
import { Section, DecoderText, Transition, Divider, InViewport, Image, Button } from '../../components/Components';   
import styles from './research.module.css';
import banner from 'app/static/images/research.svg';
import bannerFull from 'app/static/images/researchfull.svg';
import bannerPlaceholder from 'app/static/images/research-placeholder.svg';
import publicCV from '/docs/sjlu-public-cv.pdf';
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
          width={1440}
          height={800}
          sizes={`(max-width: 768px) 100vw, 1440px`}          
          loading="eager" 
          alt="Research banner"                    
        />
        <div className={styles.gradient} data-visible={visible}/>
      </div>
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
                <Button iconHoverShift href={publicCV} target="_blank" rel="noopener noreferrer" iconEnd="copy" download>
                            {'Download CV'}
                          </Button>          
          </>
        )}        
      </Transition>
    </Section>
  );
};
