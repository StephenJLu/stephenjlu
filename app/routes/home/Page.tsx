import { useRef } from 'react';
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
  const home = useRef<HTMLElement>(null);
  const about = useRef<HTMLElement>(null);
  const project = useRef<HTMLElement>(null);
  const contact = useRef<HTMLElement>(null);
  
  
  return (                                
      <div className={`${styles.page} ${styles.container}`} bs-data-theme='dark'>                    
      <Home
      id="home"
      sectionRef={home}
      />
      <About
      id="home"
      sectionRef={about}
      />   
      <Project
      id="home"
      sectionRef={project}
      />   
      <Contact
      id="home"
      sectionRef={contact}
      />             
      </div> 
  );
};