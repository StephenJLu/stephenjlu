import React, { useEffect } from 'react';
import { Heading } from '~/components/heading/heading';
import { Text } from '~/components/text/text';
import styles from './bluesky.module.css';

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bsky-embed': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          username?: string;
          mode?: string;
          limit?: string;
          'link-target'?: string;
          'link-image'?: string;
          'load-more'?: string;
          'custom-styles'?: string;
        },
        HTMLElement
      >;
    }
  }
}

const BlueSkyText = ({ visible, titleId }: { visible: boolean; titleId: string }) => {
  return (
    <>  
      <Heading 
        className={styles.title} 
        data-visible={visible} 
        level={3} 
        weight={'light'} 
        id={titleId}
      >
        Follow Me on BlueSky
      </Heading>
      <Text 
        className={styles.description} 
        data-visible={visible} 
        size="l"
      >
        Stay updated with my latest thoughts, projects, and insights. Follow me on BlueSky for real-time updates and conversations.
      </Text>
      <div 
        className={styles.feedContainer} 
        data-visible={visible}
      >
        <bsky-embed
          username="stephenjlu.com"
          mode="dark"
          limit="5"
          link-target="_blank"
          link-image="true"
          load-more="true"
          custom-styles=".border-slate-300 { border-color: light-gray; }"
        />
      </div>
    </>
  );
};

export default BlueSkyText;
