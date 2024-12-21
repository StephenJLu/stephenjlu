import React, { useState, useEffect } from 'react';
import { Section, Heading, Text, Link, Image,
  DecoderText, Transition, Divider, InViewport, PolaroidImage } from 'app/components/Components';
import styles from './intro.module.css';
import coding from './piano.png';
import banner from 'app/static/images/music.png';
import bannerPlaceholder from 'app/static/images/music-placeholder.svg';

interface IntroProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface IntroComponentProps extends IntroProps {
  visible: boolean;  
}

const IntroText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>    
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      Stephen is a classical pianist, and now works on electronic music production. His focus is on music composition, mixing, and production. Counter-melodies are a significant aspect of his music.</Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      He grew up playing the piano and violin, performing in his school's orchestra, and performing as a solo musician. He was a member of the Tucson Junior Strings Orchestral Training Program and performed in the Tucson Music Teachers Association's Annual Piano Ensemble.</Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
     In November 1997, Stephen won 1st place in the Music Teachers National Association Arizona State Division Competition in Composition for his piano piece, Broken Senses.</Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'} style={{ fontStyle: 'italic' }}>
     Stephen now enjoys electronic music composition and production in his spare time.</Text>
  </>

);
interface IntroComponentProps extends IntroProps {
  visible: boolean;}

export const Intro = ({ id, visible, sectionRef }: IntroComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const titleId = `${id}-title`;  
  
  return (
    <Section       
      className={styles.intro}
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
          src={banner}                    
          placeholder={bannerPlaceholder}
          width={600}
          height={327}
          sizes={`(max-width: 768px) 100vw, 1440px`}                     
          alt="Research banner"
          role="presentation"
          loading="lazy"
          loaded={visible}
          onLoad={() => console.log('Webdev banner loaded.')}
          onError={() => console.error('Failed to load Webdev banner image.')}
        />
        <div className={styles.gradient} data-visible={visible}/>
      </div>      
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>Music & Electronic Production</Heading>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
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
                          text={'#fromchords2beats'}
                          delay={1300}
                        />
                      )}
                    </div>
                  );
                }}
                </InViewport>            
              </div>
                <IntroText visible={visible} titleId={titleId} />
            </div>
              <div className={styles.column}>                        
                  <div className={styles.polaroidContainer} data-visible={visible}>
                    <PolaroidImage rotation={15} imageUrl={coding} caption={'Music is life'} />
                  </div>
              </div>            
          </div>
          </>
        )}        
      </Transition>
    </Section>
  );
};
