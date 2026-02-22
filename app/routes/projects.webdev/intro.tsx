import React, { useState } from 'react';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/heading/heading';
import { Text } from '~/components/text/text';
import { Image } from '~/components/image/image';
import { Transition } from '~/components/transition/transition';
import { DividerDecoderText } from '~/components/divider-decoder-text/divider-decoder-text';
import PolaroidImage from '~/components/image/PolaroidImage';
import styles from './intro.module.css';
import coding from './coding.jpg';
import banner from 'app/static/images/webdev.png';
import bannerPlaceholder from 'app/static/images/webdev-placeholder.svg';

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
      Growing up, Stephen learned Turbo Pascal and BASIC. In high school, he taught himself HTML, took classes in C++, and helped the Programming Club design and code the school's first website. In his spare time, he developed a game for the TI-85 calculator inspired by horse racing, where players place bets on which mathematical symbol they think will "win" the race.
      </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      His first personal website—which detailed starship specifications and histories from Star Trek—was hosted by GeoCities, one of the first widely available platforms offering free website creation and hosting in the 1990s.
     </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      In college, Stephen took additional courses in JavaScript and has continued to work on personal web development projects ever since. While serving as Lead Webmaster for the California Association of Criminalists, he overhauled the organization's website for more effective and attractive visitor engagement and communication.
     </Text>
     <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
      In a culmination of his programming and web development experience, Stephen designed, developed, and shipped Striae, a comparison image annotation platform for forensic firearms examiners. Striae streamlines the process of labeling and annotating digital comparison images, directly linking notes to specific digital evidence, generating well-formatted reports with a single click, and facilitating authenticated digital confirmations and peer review.
     </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'} style={{ fontStyle: 'italic' }}>
      Scroll down for information about Stephen's development environment, coding languages, and web development projects.
    </Text>
  </>

);

export const Intro = ({ id, visible, sectionRef }: IntroComponentProps) => {  
  const [focused, setFocused] = useState(false);
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
          alt="Webdev banner"
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
              <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>Web Design and Development for the Public Good</Heading>
              <DividerDecoderText
                visible={visible}
                text="#buildinpublic"
                className={styles.tag}
                textClassName={styles.tagText}
                dividerDelay={1000}
                decoderDelay={1300}
                notchWidth="64px"
                notchHeight="8px"
              />
                <IntroText visible={visible} titleId={titleId} />
            </div>
              <div className={styles.column}>                        
                  <div className={styles.polaroidContainer} data-visible={visible}>
                    <PolaroidImage rotation={-8} imageUrl={coding} caption={'Coding happiness'} />
                  </div>
              </div>            
          </div>
          </>
        )}        
      </Transition>
    </Section>
  );
};
