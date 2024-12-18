import React, { useState } from 'react';
import { Button, Divider, Heading, Section, Text, Transition, useTheme } from '../../components/Components';
import { useWindowSize } from 'app/hooks';
import { useHydrated } from 'app/hooks/useHydrated';
import styles from './projects.module.css';

interface ProjectsProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
  visible?: boolean;
  index?: number;
  title?: string;
  description?: string;
  bannerImage?: string;
  buttonText?: string;
  buttonLink?: string;
  alternate?: boolean;
}

export function Projects({
  id,
  sectionRef,
  visible: sectionVisible,
  index,
  title,
  description,
  bannerImage,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}: ProjectsProps) {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const { avatar: imageUrl } = config;
  const rotation = Math.floor(Math.random() * 41) - 20;
  return (
    <Section
      className={styles.projects}
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
                <div className={styles.tagText} data-visible={visible}>
                  Welcome!
                </div>
              </div>
              <ProjectsText visible={visible} titleId={titleId} />
                <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="https://legacy.stephenjlu.com/contact"
                icon="send"
                >
                  Contact Me
                </Button>
            </div>
          )}
        </Transition>
    </Section>
  );
};
