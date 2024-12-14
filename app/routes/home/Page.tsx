import { useRef } from 'react';
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
  const home = useRef<HTMLElement>(null);
  const about = useRef<HTMLElement>(null);
  const projects = useRef<HTMLElement>(null);  
  
  
  return (
    <div bs-data-theme='dark'>
      <Header />                               
      <div className={`${styles.page} ${styles.container}`}>                    
      <Home
      id="home"
      sectionRef={home}
      />
      <Projects
      id="projects"
      sectionRef={projects}
      />  
      <About
      id="about"
      sectionRef={about}
      />              
      </div>
      </div> 
  );
};