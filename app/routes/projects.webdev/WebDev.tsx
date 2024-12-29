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
  const cac = useRef<HTMLElement>(null as unknown as HTMLElement);
  const turnstile = useRef<HTMLElement>(null as unknown as HTMLElement);
  
  useEffect(() => {
    const sections = [intro, content, legacy, fltc, als, cac, turnstile];
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
            title="Legacy Portfolio Website: legacy.stephenjlu.com"
            buttonText="Visit Website"
            buttonLink="https://legacy.stephenjlu.com"      
            />
            <Projects
            id="turnstile"
            sectionRef={turnstile}
            visible={visibleSections.includes(turnstile.current)}
            index={2}
            title="Cloudflare Turnstile: An Implementation of Cloudflare's CAPTCHA Challenge"
            buttonText="Full Documentation"
            buttonLink="https://docs.stephenjlu.com/docs-stephenjlu/projects/how-to-implement-cloudflares-turnstile"      
            />
            <Projects
            id="cac"
            sectionRef={cac}
            visible={visibleSections.includes(cac.current)}
            index={3}
            title="California Association of Criminalists"
            buttonText="Visit Website"
            buttonLink="https://www.cacnews.org"      
            />
            <Projects
            id="fltc"
            sectionRef={fltc}
            visible={visibleSections.includes(fltc.current)}
            index={4}
            title="Forensic Leaders Training Center: Flexibility in Leadership. Trust through Consistency."
            buttonText="GitHub Archive"
            buttonLink="https://github.com/StephenJLu/FLTC"      
            />
            <Projects
            id="als"
            sectionRef={als}
            visible={visibleSections.includes(als.current)}
            index={5}
            title="A Lasting Strength: Change What It Means to Live with ALS"
            buttonText="GitHub Archive"
            buttonLink="https://github.com/StephenJLu/A-Lasting-Strength"      
            />         
      </div>       
  );
};