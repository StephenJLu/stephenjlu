import React from 'react';
import { Section } from '../../components/Components';
import { baseMeta } from '../../utils/meta';
import styles from './contact.module.css';

interface ContactProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
  scrollIndicatorHidden?: boolean;  
}

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

export const Contact: React.FC<ContactProps> = ({ id, sectionRef, scrollIndicatorHidden, ...rest }) => {  
  const theme = 'dark';
  const titleId = `${id}-title`;

  
  return (
    <Section
    className={styles.page}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
      >
                               
        <h1>Contact Me</h1> <h2>This new website is still under construction.</h2>
        <p>I'm currently converting my legacy website to a new, modern, and responsive design, based on <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>. I know it's probably overkill for a personal website/portfolio, but I learn best by screwing up.<br /><br />
        In the meantime, you can find me at my <a href="https://legacy.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>legacy website</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
                    

    </Section>
       
  );
};