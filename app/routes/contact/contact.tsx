import React from 'react';
import { Section, Heading, Text, Link } from '../../components/Components';
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
    className={styles.contact}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
      >
       <Heading level={1} as={'h1'}>Contact Me</Heading>
                 <Heading level={2} as={'h2'}>This new website is still under construction.</Heading>                   
             <Text as={'p'}>              
                 I'm currently converting my legacy website to a new, modern, and responsive design, based on <Link href="https://react.dev/">React</Link>. I know it's probably overkill for a personal website/portfolio, but I learn best by screwing up. Some things might look screwy on your browser or mobile right now.
                 I'm working on it. You can check out the <Link href="https://storybook.stephenjlu.com/">Storybook</Link> to see the component designs.<br /><br />
                 In the meantime, you can find me at my <Link href="https://legacy.StephenJLu.com/">legacy website</Link> or on <Link href="https://www.linkedin.com/in/stephenjlu/">LinkedIn</Link>.        
                  </Text> 
    </Section>
       
  );
};