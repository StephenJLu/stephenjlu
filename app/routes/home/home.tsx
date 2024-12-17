import React, { useState } from 'react';
import { Section, PolaroidImage, Heading, Text, Link,
  DecoderText, Transition, Button, Divider } from '../../components/Components';
import styles from './home.module.css';
import config from '../../config.json';

interface HomeProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;  
}

const HomeText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>     

    <Heading className={styles.title} data-visible={visible} level={2} id={titleId}>
      Hi!
    </Heading>
    <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>This new website is still under construction.</Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&apos;m currently converting my legacy website to a new, modern, and responsive design, based on <Link href="https://react.dev/">React</Link>. I know it&apos;s probably overkill for a personal website/portfolio, but I learn best by screwing up. Some things might look screwy on your browser or mobile right now.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
     I&apos;m working on it. You can check out the <Link href="https://storybook.stephenjlu.com/">Storybook</Link> to see the component designs.      
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
     In the meantime, you can find me at my <Link href="https://legacy.StephenJLu.com/">legacy website</Link> or on <Link href="https://www.linkedin.com/in/stephenjlu/">LinkedIn</Link>.
     </Text>
  </>

);
interface HomeComponentProps extends HomeProps {
  visible: boolean;}

export const Home = ({ id, visible, sectionRef }: HomeComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const { avatar: imageUrl } = config;
  const rotation = Math.floor(Math.random() * 41) - 20;
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
              <HomeText visible={visible} titleId={titleId} />
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
