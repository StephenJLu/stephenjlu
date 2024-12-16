import styles from './footer.module.css';
import config from '../../config.json';
import { TextAnim, InViewport } from "../../components/Components";

const delay = config.delay;

export const Footer = () => {
  return (
    <div data-theme='dark'>
    <InViewport>
      {(isInViewport) => (
        <div className={styles.footer}>
          {isInViewport && (
            <div className={styles.footerContent}>
              <span className={styles.date}>
                <TextAnim
                  typeText={`© ${new Date().getFullYear()} ${config.name}. All rights reserved.`}
                  delay={delay}
                />                
              </span>              
            </div>
          )}          
        </div>        
      )}
    </InViewport>
    <div className={styles.footer}>
          <p>Hand-crafted design by <a href="humans.txt">humans</a>.</p>
          </div>
    </div>
  );
};