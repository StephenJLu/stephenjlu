import { useEffect, useState, useRef } from 'react';
import { baseMeta } from 'app/utils/meta';
import styles from './page.module.css';
import config from "app/config.json";
import { Intro } from './intro';
import { Content } from './content';

export const meta = () => {
  return baseMeta({
    title: `${config.title}`,
    description: `Projects Portfolio of ${config.name} — Web Design and Development for the Public Good`,
  });
};

export const Page = () => {  
  const [visibleSections, setVisibleSections] = useState<HTMLElement[]>([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);    
  const intro = useRef<HTMLElement>(null as unknown as HTMLElement);
  const content = useRef<HTMLElement>(null as unknown as HTMLElement);  
  
  useEffect(() => {
    const sections = [intro, content];
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
    <div data-theme='dark' className={`${styles.page} ${styles.container}`}>               
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
      </div>       
  );
};