import React from 'react';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/heading/heading';
import { Text } from '~/components/text/text';
import Button from '~/components/button/button';
import { Transition } from '~/components/transition/transition';
import { Divider } from '~/components/divider/divider';
import styles from './error-page.module.css';

interface ErrorPageProps {
  errorCode: string;
  title: string;
  message: string;
  showHomeButton?: boolean;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode,
  title,
  message,
  showHomeButton = true,
}) => {
  return (
    <Section className={styles.errorPage} as="section" tabIndex={-1}>
      <Transition in={true} timeout={0} unmount={false}>
        {({ visible, nodeRef }: { visible: boolean; nodeRef: React.RefObject<HTMLDivElement> }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.errorCodeContainer} data-visible={visible}>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={1000}
              />
              <div className={styles.tag} aria-hidden>
                <div className={styles.tagText} data-visible={visible}>
                  Error
                </div>
              </div>
            </div>
            
            <div className={styles.textContent}>
              <Heading 
                className={styles.errorCode} 
                data-visible={visible} 
                level={1} 
                weight="black"
                as="h1"
              >
                {errorCode}
              </Heading>
              
              <Heading 
                className={styles.title} 
                data-visible={visible} 
                level={2} 
                weight="light"
                as="h2"
              >
                {title}
              </Heading>
              
              <Text 
                className={styles.message} 
                data-visible={visible} 
                size="l" 
                as="p"
              >
                Oops... {message}
              </Text>
              
              {showHomeButton && (
                <div className={styles.buttonContainer} data-visible={visible}>
                  <Button 
                    iconHoverShift 
                    href="/" 
                    iconEnd="arrow-right"
                  >
                    Back to Home
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};