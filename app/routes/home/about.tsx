import React, { useState, useEffect } from 'react';
import { Section, Heading, Text, Link,
  DecoderText, Transition, Divider, InViewport, Image } from '../../components/Components';
import { useReducedMotion } from 'framer-motion';
import styles from './about.module.css';
import banner from 'app/static/images/forensics.jpg';

interface AboutProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface AboutComponentProps extends AboutProps {
  visible: boolean;  
}

const AboutText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>  
    <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>Hello there</Heading>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      I'm a retired Crime Scene Investigator and Forensic Firearms Examiner-turned-front-end web designer and developer. Throughout
      my varied careers, I've studied everything from mosquitoes and disease biology to bloodstain patterns,
      bullet trajectories, and digging up clandestine graves. I've also worked as a freelance web designer,
      providing services to non-profit organizations and small businesses.
      </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      I'm currently working on this portfolio website, so please check back soon for updates and changes.
     </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
     In the meantime, you can find more detailed information about me at my <Link href="https://legacy.StephenJLu.com/">legacy website</Link> or on <Link href="https://www.linkedin.com/in/stephenjlu/">LinkedIn</Link>.
     </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'} style={{ fontStyle: 'italic' }}>
     Thanks for visiting!
    </Text>
  </>

);
interface AboutComponentProps extends AboutProps {
  visible: boolean;}

export const About = ({ id, visible, sectionRef }: AboutComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const titleId = `${id}-title`;
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false); 
  
  return (
    <Section       
      className={styles.about}
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
            <div className={styles.backgroundImage} ref={nodeRef}>
        <Image                    
          src={banner}
          placeholder={`${banner.split('.')[0]}-placeholder.jpg`}          
        />
        <div className={styles.gradient} />
      </div>
          <div className={styles.content}>                       
            
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
                          text={'Forensics'}
                          delay={1400}
                        />
                      )}
                    </div>
                  );
                }}
                </InViewport>            
              </div>
                <AboutText visible={visible} titleId={titleId} />
                                 
          </div>
          </>
        )}        
      </Transition>
    </Section>
  );
};
