import React, { useState, useEffect } from 'react';
import { Section } from '~/components/section/section';
import { DecoderText } from '~/components/decoder-text/decoder-text';
import { Transition } from '~/components/transition/transition';
import { Divider } from '~/components/divider/divider';
import InViewport from '~/components/in-viewport/InViewport';
import { Image } from '~/components/image/image';
import styles from './forensics.module.css';
import banner from 'app/static/images/forensics.png';
import bannerFull from 'app/static/images/forensicsfull.png';
import bannerPlaceholder from 'app/static/images/forensics-placeholder.svg';
import { default as ForensicsText } from './ForensicsText';

interface ForensicsProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface ForensicsComponentProps extends ForensicsProps {
  visible: boolean;  
}


interface ForensicsComponentProps extends ForensicsProps {
  visible: boolean;}

export const Forensics = ({ id, visible, sectionRef }: ForensicsComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const titleId = `${id}-title`;  
  
  return (
    <Section       
      className={styles.forensics}
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
          alt="Forensics banner"
          role="presentation"
          loading="lazy"
          loaded={visible}
          onLoad={() => console.log('Forensics banner loaded.')}
          onError={() => console.error('Failed to load Forensics banner image.')}
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
                          text={'Forensic Experience'}
                          delay={1600}
                        />
                      )}
                    </div>
                  );
                }}
                </InViewport>            
              </div>
                <ForensicsText visible={visible} titleId={titleId} />  
                </div>        
          </>
        )}        
      </Transition>
    </Section>
  );
};
