import React, { useState } from 'react';
import { MenuBar } from '../../layouts/Layouts';
import { Header } from './Header';
import { Footer } from './Footer';
import styles from './page.module.css';
import config from "../../config.json";
import { baseMeta } from '../../utils/meta';

export const meta = () => {
  return baseMeta({
    title: `${config.title}`,
    description: `Projects Portfolio of ${config.name} — Web Design and Development for the Public Good.`,
  });
};

export const Page: React.FC = () => {  
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [isActive, setIsActive] = useState<boolean>(true);

  const menuItems = config.menuItems.map((item) => ({
    ...item,
    onClick: () => {
      setActiveItem(item.label);
      setIsActive(isActive);                
    }
  }));

  return (    
    <div data-bs-theme="dark">                  
      <MenuBar
        items={menuItems}
        backgroundColor="#000"
        activeItem={activeItem}
        onSelect={(item) => {
          setActiveItem(item.label);
          setIsActive(true);
        }} 
      />
      <div>         
        {activeItem === 'Home' && (
        <>
          <Header />
      <section className={styles.page} id="home">        
        <h1>Hi!</h1> <h2>This new website is still under construction.</h2>
        <p>I'm currently converting my legacy website to a new, modern, and responsive design, based on <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>. I know it's probably overkill for a personal website/portfolio, but I learn best by screwing up.</p>
        <p>In the meantime, you can find me at my <a href="https://legacy.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>legacy website</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </ >
      )}
      {activeItem === 'About' && (
        <>          
      <section className={styles.page} id="about">
        <h1>About Me</h1>
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at my <a href="https://legacy.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>legacy website</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </ >
      )}
      {activeItem === 'Ledger' && (
        <>          
      <section className={styles.page} id="ledger">        
        <h2>You've navigated away from the page, but I'm still here!</h2>
      </section>
      </ >
      )}
      {activeItem === 'Projects' && (
        <>          
      <section className={styles.page} id="projects">
        <h1>My Projects</h1>
        <h2>Hi! This new website is still under construction. Check back soon!</h2>
        <p>
          In the meantime, you can find me at my <a href="https://legacy.StephenJLu.com/" target='_blank' rel='noopener noreferrer'>legacy website</a> or on <a href="https://www.linkedin.com/in/stephenjlu/" target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
          </p>
      </section>
      </ >
      )}
      {activeItem === 'Contact' && (
        <>          
      <section className={styles.page} id="contact">        
        <h2>You've navigated away from the page, but I'm still here!</h2>
      </section>
      </ >
      )}
        <Footer />
      </div>      
    </div>
  );
};