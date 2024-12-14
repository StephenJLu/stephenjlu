import { useEffect, useRef, useState } from 'react';
import { baseMeta } from '../../utils/meta';
import styles from './page.module.css';
import config from "../../config.json";
import { Home } from './home';
import { About } from './about';
import { Project } from './project';
import { Contact } from './contact';


export const meta = () => {
  return baseMeta({
    title: `${config.title}`,
    description: `Projects Portfolio of ${config.name} — Web Design and Development for the Public Good`,
  });
};

export const Page = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const home = useRef<HTMLElement>(null);
  const about = useRef<HTMLElement>(null);
  const project = useRef<HTMLElement>(null);
  const contact = useRef<HTMLElement>(null);  
  
  useEffect(() => {
    const sections = [home, about, project, contact];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
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
      <div className={`${styles.page} ${styles.container}`} bs-data-theme='dark'>                    
      <Home
      id="home"
      sectionRef={home}
      scrollIndicatorHidden={scrollIndicatorHidden}      
      />
      <About
      id="about"
      sectionRef={about}
      scrollIndicatorHidden={scrollIndicatorHidden}      
      />
      <Project
      id="project"
      sectionRef={project}
      scrollIndicatorHidden={scrollIndicatorHidden}      
      />
      <Contact
      id="contact"
      sectionRef={contact}
      scrollIndicatorHidden={scrollIndicatorHidden}      
      />
          
      </div> 
  );
};