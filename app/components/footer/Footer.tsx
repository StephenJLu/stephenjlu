import styles from './footer.module.css';
import config from '../../config.json';
import { TextAnim, InViewport } from "../Components";

const delay = config.delay;

export const Footer = () => {
  return (
    <InViewport>
      {(isInViewport) => (
        <div className={styles.footer} data-bs-theme="dark">
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
  );
};