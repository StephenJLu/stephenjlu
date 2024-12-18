import React, { useState, useEffect } from 'react';
import { Section, Heading, Text, Link,
  DecoderText, Transition, Divider, InViewport, PolaroidImage } from '../../components/Components';
import styles from './home.module.css';
import config from '../../config.json';
import steveImage from 'app/static/images/steve.jpg';

interface HomeProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface HomeComponentProps extends HomeProps {
  visible: boolean;  
}

const HomeText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>
    <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>Hello there</Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm a retired Crime Scene Investigator and Forensic Firearms Examiner-turned-front-end web designer and developer. Throughout
      my varied careers, I've studied everything from mosquitoes and disease biology to bloodstain patterns,
      bullet trajectories, and digging up clandestine graves. I've also worked as a freelance web designer,
      providing services to non-profit organizations and small businesses.
      </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm currently working on this portfolio website, so please check back soon for updates and changes.
     </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
     In the meantime, you can find more detailed information about me at my <Link href="https://legacy.StephenJLu.com/">legacy website</Link> or on <Link href="https://www.linkedin.com/in/stephenjlu/">LinkedIn</Link>.
     </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p" style={{ fontStyle: 'italic' }}>
     Thanks for visiting!
    </Text>
  </>

);
interface HomeComponentProps extends HomeProps {
  visible: boolean;}

export const Home = ({ id, visible, sectionRef }: HomeComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const titleId = `${id}-title`;  
  
  return (
    <Section       
      className={styles.home}
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
            <div ref={nodeRef}>
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
                          delay={1500}
                        />
                      )}
                    </div>
                  );
                }}
              </InViewport>
            </div>
            <HomeText visible={visible} titleId={titleId} />          
          <div className={styles.polaroidContainer}>
                <PolaroidImage rotation={10} imageUrl={steveImage} />
              </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
