import { useEffect, useState, useRef } from 'react';
import { baseMeta } from '../../utils/meta';
import styles from './page.module.css';
import config from "../../config.json";
import { Home } from './home';
import { About } from './about';
import { Projects } from './projects';
import { Header } from '../../layouts/Layouts'


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
  const about = useRef<HTMLElement>(null as unknown as HTMLElement);
  const projects = useRef<HTMLElement>(null as unknown as HTMLElement);
  
  useEffect(() => {
    const sections = [home, about, projects];
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
      id="projects"
      sectionRef={projects}
      visible={visibleSections.includes(projects.current)}
      />  
      <About
      id="about"
      sectionRef={about}
      visible={visibleSections.includes(about.current)}
      />              
      </div>       
  );
};