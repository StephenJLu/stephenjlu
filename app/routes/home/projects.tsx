import React, { useState } from 'react';
import { Section, Heading, Text, Link, InViewport } from '../../components/Components';
import styles from './projects.module.css';

interface ProjectsProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
  scrollIndicatorHidden?: boolean;  
}

export const Projects: React.FC<ProjectsProps> = ({ id, sectionRef, scrollIndicatorHidden, ...rest }) => {  
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const titleId = `${id}-title`;

  
  return (
    <Section
    className={`${styles.projects} ${styles.container}`}    
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
      >
           <InViewport>
      {(isInViewport) => {
        if (isInViewport && !hasEnteredViewport) {
          setHasEnteredViewport(true);
        }
        return (
        <div className={isInViewport ? styles.fadeIn : styles.fadeOut}>
            {hasEnteredViewport && (
            <>              
          <Heading level={1} as={'h1'}>Projects</Heading>
          <Heading level={2} as={'h2'}>This new website is still under construction.</Heading>                   
      <Text as={'p'}>              
          I'm currently converting my legacy website to a new, modern, and responsive design, based on <Link href="https://react.dev/">React</Link>. I know it's probably overkill for a personal website/portfolio, but I learn best by screwing up. Some things might look screwy on your browser or mobile right now.
          I'm working on it. You can check out the <Link href="https://storybook.stephenjlu.com/">Storybook</Link> to see the component designs.<br /><br />
          In the meantime, you can find me at my <Link href="https://legacy.StephenJLu.com/">legacy website</Link> or on <Link href="https://www.linkedin.com/in/stephenjlu/">LinkedIn</Link>.        
           </Text>
           </>
           )}
           </div>
        );
      }}
      </InViewport>      
    </Section>
       
  );
};