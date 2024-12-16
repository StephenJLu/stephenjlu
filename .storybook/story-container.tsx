import React, { CSSProperties, ReactNode } from 'react';
import './story-container.css';

interface StoryContainerProps {
  padding?: number;
  stretch?: boolean;
  gutter?: number;
  vertical?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

export const StoryContainer: React.FC<StoryContainerProps> = ({  
  padding = 32,
  stretch,
  gutter = 32,
  vertical,
  children,
  style,
}) => (
  <div
    className="storyContainer"
    style={{
      padding,
      gap: gutter,
      flexDirection: vertical ? 'column' : 'row',
      alignItems: stretch ? 'stretch' : 'center',
      justifyContent: stretch ? 'stretch' : 'center',
      ...style,
    }}
  >
    {children}
  </div>
);