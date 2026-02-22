import React, { useState } from 'react';
import { Section } from '~/components/section/section';
import { Transition } from '~/components/transition/transition';
import { DividerDecoderText } from '~/components/divider-decoder-text/divider-decoder-text';
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

export const Research = ({ id, visible, sectionRef }: ResearchComponentProps) => {  
  const [focused, setFocused] = useState(false);
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
              <DividerDecoderText
                visible={visible}
                text="Research Experience"
                className={styles.tag}
                textClassName={styles.tagText}
                dividerDelay={1000}
                decoderDelay={1600}
                notchHeight="8px"
              />
                <ResearchText visible={visible} titleId={titleId} />
                  <div className={styles.actions}>
                    <Button iconHoverShift href={publicCV} target="_blank" rel="noopener noreferrer" iconEnd="copy" download="Lu - Public CV.pdf">
                      {'Download CV'}
                    </Button>
                    <Button iconHoverShift href="https://orcid.org/0009-0006-1296-7245" target="_blank" rel="noopener noreferrer" iconEnd="link">
                      {'ORCID Profile'}
                    </Button>
                  </div>
              </div>          
          </>
        )}        
      </Transition>
    </Section>
  );
};
