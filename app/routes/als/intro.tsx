import React, { useState, useEffect } from 'react';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/heading/heading';
import { Text } from '~/components/text/text';
import { Image } from '~/components/image/image';
import { DecoderText } from '~/components/decoder-text/decoder-text';
import { Transition } from '~/components/transition/transition';
import { Divider } from '~/components/divider/divider';
import InViewport from '~/components/in-viewport/InViewport';
import PolaroidImage from '~/components/image/PolaroidImage';
import styles from './intro.module.css';
import gehrig from './lou-gehrig.svg';
import banner from 'app/static/images/alsfull.png';
import bannerPlaceholder from 'app/static/images/alssection-placeholder.svg';

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
    <em>Amyotrophic Lateral Sclerosis (ALS)</em> is a devastating and always fatal neurodegenerative disease that presents with progressive muscular weakness and wasting. Since motor functions become severely limited, many daily life activities become extremely difficult or impossible. Over time, individuals with ALS lose the ability to speak, eat, move, and eventually breathe, while typically retaining full cognitive awareness. The disease places immense emotional, physical, and financial burdens not only on those diagnosed but also on their families and caregivers.
      </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
    In the United States, ALS, a motor neuron disease, is also widely known as <em>Lou Gehrig’s disease</em>, named after the legendary New York Yankees baseball player who brought national attention to the illness in the late 1930s. Lou Gehrig was renowned for his strength, humility, and consecutive game streak, earning him the nickname "The Iron Horse." His sudden retirement in 1939, prompted by his ALS diagnosis, and his poignant farewell speech, "The Luckiest Man," left an indelible mark on the American public. Though he passed away just two years later, Gehrig’s courage and legacy continue to inspire advocacy and research efforts to this day.
     </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'}>
    Despite modern advancements in understanding ALS, there is still no cure, and effective treatments remain limited. However, ongoing research, advocacy, compassionate care, and wholistic community support are making a difference in the lives of those affected.
     </Text>
    <Text className={styles.description} data-visible={visible} size="l" as={'p'} style={{ fontStyle: 'italic' }}>
    You can help advance the mission to fight ALS. Please consider visiting and contributing to the organizations, individuals, and initiatives listed below. Your support brings hope, awareness, and vital resources to those who need it most.
    </Text>
    <br />
    <br />
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
          alt="ALS banner"
          role="presentation"
          loading="lazy"
          loaded={visible}
          onLoad={() => console.log('ALS banner loaded.')}
          onError={() => console.error('Failed to load ALS banner image.')}
        />
        <div className={styles.gradient} data-visible={visible}/>
      </div>      
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>What is ALS?</Heading>
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
                          text={'#endALS'}
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
                    <PolaroidImage rotation={18} imageUrl={gehrig} caption={'Lou Gehrig'} />
                  </div>
              </div>            
          </div>
          </>
        )}        
      </Transition>
    </Section>
  );
};
