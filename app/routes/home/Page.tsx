import { useEffect, useState, useRef } from 'react';
import { baseMeta } from '../../utils/meta';
import styles from './page.module.css';
import config from "../../config.json";
import { Home } from './home';
import { Forensics } from './forensics';
import { Projects } from './projects';
import { Header } from '../../layouts/Layouts'
import webDevImage from 'app/static/images/web-dev-cropped.png';
import csiCEOImage from 'app/static/images/csi-ceo.png';
import musicImage from 'app/static/images/music.png';


export const meta = () => {
  return baseMeta({
    title: `${config.title}`,
    description: `Projects Portfolio of ${config.name} — Web Design and Development for the Public Good`,
  });
};

export const Page = () => {  
  const [visibleSections, setVisibleSections] = useState<HTMLElement[]>([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);    
  const home = useRef<HTMLElement>(null as unknown as HTMLElement);
  const forensics = useRef<HTMLElement>(null as unknown as HTMLElement);
  const webDev = useRef<HTMLElement>(null as unknown as HTMLElement);
  const csiCEO = useRef<HTMLElement>(null as unknown as HTMLElement);
  const music = useRef<HTMLElement>(null as unknown as HTMLElement);
  
  useEffect(() => {
    const sections = [home, forensics, webDev, csiCEO, music];
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

    indicatorObserver.observe(home.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  
  
  return (
    <div data-theme='dark' className={`${styles.page} ${styles.container}`}>
      <Header />          
      <Home
      id="home"
      sectionRef={home}
      visible={visibleSections.includes(home.current)}
      />
      <Projects
      id="web-dev"
      sectionRef={webDev}
      visible={visibleSections.includes(webDev.current)}
      index={1}
      title="Web Design and Development for the Public Good"
      buttonText="View Projects"
      buttonLink="/projects/web-dev"
      bannerImage={webDevImage}
      />
      <Projects
      id="csi-ceo"
      sectionRef={csiCEO}
      visible={visibleSections.includes(csiCEO.current)}
      index={2}
      title="CSI to CEO: What the Dead Can Teach Us About Life and Leadership"
      buttonText="Book Website"
      buttonLink="https://www.CSItoCEO.com"
      bannerImage={csiCEOImage}
      />
      <Projects
      id="music"
      sectionRef={music}
      visible={visibleSections.includes(music.current)}
      index={3}
      title="Music & Electronic Production"
      buttonText="Listen In"
      buttonLink="/projects/music"
      bannerImage={musicImage}
      />  
      <Forensics
      id="forensics"
      sectionRef={forensics}
      visible={visibleSections.includes(forensics.current)}
      />              
      </div>       
  );
};