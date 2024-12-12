import React from "react";
import { TextFade, DecoderText } from "../Components";
import styles from "./header.module.css";
import config from "../../config.json";

export const Header = () => {    
  const fadeText = config.name;
  const roles = config.roles;
  const baseDelay = config.delay;  

  return (
    <header>      
      <div className={styles.header} data-bs-theme="dark">
        <div className={styles.headerBackground} />
        <h1>
          <TextFade fadeText={fadeText} delay={baseDelay}/>
        </h1>
        <span className={styles.subtitle}>
          {roles.map((role, index) => (
            <React.Fragment key={index}>
              <DecoderText text={role.role} delay={role.delay} />
              <br />
            </React.Fragment>
          ))}
        </span>                                 
        </div>      
    </header>
  );
};