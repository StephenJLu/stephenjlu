import React, { useState, useEffect } from 'react';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/heading/heading';
import { Text } from '~/components/text/text';
import { Link } from '~/components/link/link';
import Button from '~/components/button/button';
import { DecoderText } from '~/components/decoder-text/decoder-text';
import { Transition } from '~/components/transition/transition';
import { Divider } from '~/components/divider/divider';
import InViewport from '~/components/in-viewport/InViewport';
import PolaroidImage from '~/components/image/PolaroidImage';
import styles from './home.module.css';
import config from '../../config.json';
import steveImage from 'app/static/images/steve.svg';

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
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      I'm a retired Crime Scene Investigator and Forensic Firearms Examiner-turned-full-stack web designer and developer. Throughout
      my varied careers, I've studied everything from mosquitoes and disease biology to bloodstain patterns,
      bullet trajectories, and digging up clandestine graves.
      </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      Welcome to my portfolio site! Here you'll find information <Link href='/#forensics'>about me</Link>, <Link href='/#webdev'>my work</Link>, and how to <Link href='/contact'>get in touch</Link>. I've also written a few articles about my transition from forensics to web development, which you can find <Link href='https://ledger.stephenjlu.com'>here</Link>. My current project is <Link href='https://www.striae.org' target="_blank" rel="noopener noreferrer">Striae</Link>, an annotation web app for firearms examiners.
     </Text>     
    <div className={styles.button} data-visible={visible}>
      <Button iconHoverShift href='/gallery' iconEnd="arrow-right">
        Photo Gallery
      </Button>
    </div>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'} style={{ fontStyle: 'italic' }}>
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
                <HomeText visible={visible} titleId={titleId} />
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
