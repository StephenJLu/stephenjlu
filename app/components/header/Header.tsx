import React from "react";
import { TextAnim, TextFade, DecoderText } from "../Components";
import styles from "./header.module.css";
import config from "../../config.json";

export const Header = () => {    
  const fadeText = config.name;
  const codeText = config.roles;
  const delay = config.delay;
  const asciiText = config.ascii;

  return (
    <header>      
      <div className={styles.header} data-bs-theme="dark">
        <div className={styles.headerBackground} />
        <h1>
          <TextFade fadeText={fadeText} delay={delay}/>
        </h1>
        <span className={styles.subtitle}>
         {codeText.map((text, index) => (
            <React.Fragment key={index}>
              <DecoderText text={`${text}`} delay={delay} />
              <br />
            </React.Fragment>
          ))}
          </span>                                  
        </div>      
    </header>
  );
};