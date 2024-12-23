import React, { useEffect, useState } from "react";
import { TextFade, DecoderText } from "../../components";
import { useInView } from 'react-intersection-observer';
import styles from "./header.module.css";
import config from "../../config.json";


export const Header = () => {  
  const fadeText = config.name;
  const roles = config.roles;
  const baseDelay = config.delay;  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });  

  useEffect(() => {
    if (currentRoleIndex < roles.length) {
      const role = roles[currentRoleIndex];
      const calculatedDelay = role.length * 75; // Adjust delay based on string length
      const timer = setTimeout(() => {
        setCurrentRoleIndex(currentRoleIndex + 1);
      }, calculatedDelay);

      return () => clearTimeout(timer);
    }
  }, [currentRoleIndex, roles]);

  return (    
    <header ref={ref}>                
      <div className={styles.header}>
      <div className={`${styles.headerBackground} ${!inView ? styles.hidden : ''}`} />
         <h1>
        <TextFade fadeText={fadeText} delay={baseDelay}/>
      </h1>
      <span className={styles.subtitle}>
        {roles.slice(0, currentRoleIndex + 1).map((role: string, index: number) => {
        const calculatedDelay = role.length * 75;
        return (
          <React.Fragment key={index}>
          <DecoderText text={role} delay={calculatedDelay} />
          <br />
          </React.Fragment>
        );
        })}
      </span>                                 
      </div>      
    </header>    
  );
};