import React from 'react';
import { Section, PolaroidImage } from '../../components/Components';
import styles from './home.module.css';
import config from '../../config.json';

interface HomeProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
  scrollIndicatorHidden?: boolean;  
}

export const Home: React.FC<HomeProps> = ({ id, sectionRef, scrollIndicatorHidden, ...rest }) => {  
  const theme = 'dark';
  const titleId = `${id}-title`;
  const { avatar: imageUrl } = config; // Destructure avatar from config

  
  return (
    <Section
    className={styles.home}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
      >
         <div className={styles.avatar}>
        <PolaroidImage        
          imageUrl={imageUrl}
          rotation={-12}
        />
        
        <div>
        <div>
          <h1>Hi!</h1>
          <h2>This new website is still under construction.</h2>        
      </div>
      </div>
      <div>
        <p>
          I'm currently converting my legacy website to a new, modern, and responsive design, based on <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>. I know it's probably overkill for a personal website/portfolio, but I learn best by screwing up. Some things might look screwy on your browser or mobile right now.
          I'm working on it. You can check out the <a href="https://storybook.stephenjlu.com/" target='_blank' rel='noopener noreferrer'>Storybook</a> to see the component designs.<br /><br />
          In the meantime, you can find me at my <a href="https://legacy.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>legacy website</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
        </p>
      </div>
      </div>
    </Section>
       
  );
};