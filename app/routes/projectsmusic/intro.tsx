import React, { useState, useEffect } from 'react';
import { Section, Heading, Text, Link,
  DecoderText, Transition, Divider, InViewport, PolaroidImage } from 'app/components/Components';
import styles from './intro.module.css';
import config from 'app/config.json';
import steveImage from 'app/static/images/steve.svg';

interface IntroProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface IntroComponentProps extends IntroProps {
  visible: boolean;  
}

const IntroText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
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
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
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
                          text={`${config.name}`}
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
                    <PolaroidImage rotation={10} imageUrl={steveImage} caption={'Steve at Mt. Woodson'} />
                  </div>
              </div>            
          </div>
        )}
      </Transition>
    </Section>
  );
};