import React, { useState } from 'react';
import { Section } from '~/components/section/section';
import { Transition } from '~/components/transition/transition';
import { DividerDecoderText } from '~/components/divider-decoder-text/divider-decoder-text';
import styles from './content.module.css';

import { default as ContentText } from './ContentText';

interface ContentProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface ContentComponentProps extends ContentProps {
  visible: boolean;  
}

export const Content = ({ id, visible, sectionRef }: ContentComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;  
  
  return (
    <Section       
      className={styles.content}
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
              <DividerDecoderText
                visible={visible}
                text="Music Production Uses"
                className={styles.tag}
                textClassName={styles.tagText}
                dividerDelay={1000}
                decoderDelay={1600}
                notchWidth="50%"
                notchHeight="8px"
              />
                <ContentText visible={visible} titleId={titleId} />          
          </>
        )}        
      </Transition>
    </Section>
  );
};
