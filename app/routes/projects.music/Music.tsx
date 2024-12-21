import { useEffect, useState, useRef } from 'react';
import { baseMeta } from 'app/utils/meta';
import styles from './music.module.css';
import config from "app/config.json";
import { Intro } from './intro';
import { Content } from './content';
import { Projects } from './projects';

export const meta = () => {
  return baseMeta({
    title: `${config.title}`,
    description: `Projects Portfolio of ${config.name} — Web Design and Development for the Public Good`,
  });
};

export const Music = () => {  
  const [visibleSections, setVisibleSections] = useState<HTMLElement[]>([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);    
  const intro = useRef<HTMLElement>(null as unknown as HTMLElement);
  const content = useRef<HTMLElement>(null as unknown as HTMLElement);
  const production = useRef<HTMLElement>(null as unknown as HTMLElement);    
  
  useEffect(() => {
    const sections = [intro, content, production];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  
  
  return (
    <div data-theme='dark' className={`${styles.music} ${styles.container}`}>               
      <Intro
      id="intro"
      sectionRef={intro}
      visible={visibleSections.includes(intro.current)}
      />      
      <Content
      id="content"
      sectionRef={content}
      visible={visibleSections.includes(content.current)}
      />
      <Projects
            id="production"
            sectionRef={production}
            visible={visibleSections.includes(production.current)}
            index={1}
            title="Listen to SJL Productions on SoundCloud"
            buttonText="Listen on SoundCloud"
            buttonLink="https://soundcloud.com/stephen-j-lu/sets/sjl-productions"      
            />            
      </div>       
  );
};