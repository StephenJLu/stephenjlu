import { useEffect, useState, useRef } from 'react';
import { baseMeta } from 'app/utils/meta';
import styles from './webdev.module.css';
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

export const WebDev = () => {  
  const [visibleSections, setVisibleSections] = useState<HTMLElement[]>([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);    
  const intro = useRef<HTMLElement>(null as unknown as HTMLElement);
  const content = useRef<HTMLElement>(null as unknown as HTMLElement);
  const legacy = useRef<HTMLElement>(null as unknown as HTMLElement);  
  const fltc = useRef<HTMLElement>(null as unknown as HTMLElement);
  const als = useRef<HTMLElement>(null as unknown as HTMLElement);
  
  useEffect(() => {
    const sections = [intro, content, legacy, fltc, als];
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
    <div data-theme='dark' className={`${styles.webdev} ${styles.container}`}>               
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
            id="legacy"
            sectionRef={legacy}
            visible={visibleSections.includes(legacy.current)}
            index={1}
            title="Legacy Portfolio Website"
            buttonText="Visit Website"
            buttonLink="https://legacy.stephenjlu.com"      
            />
            <Projects
            id="fltc"
            sectionRef={fltc}
            visible={visibleSections.includes(fltc.current)}
            index={2}
            title="Forensic Leaders Training Center"
            buttonText="GitHub Archive"
            buttonLink="https://github.com/StephenJLu/FLTC"      
            />
            <Projects
            id="als"
            sectionRef={als}
            visible={visibleSections.includes(als.current)}
            index={3}
            title="A Lasting Strength"
            buttonText="GitHub Archive"
            buttonLink="https://github.com/StephenJLu/A-Lasting-Strength"      
            />         
      </div>       
  );
};