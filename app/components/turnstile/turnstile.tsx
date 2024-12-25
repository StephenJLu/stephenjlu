import { useEffect } from 'react';
import { classes } from '~/utils/style';
import styles from './turnstile.module.css';

declare global {
  interface Window {

  /* 
  Possible Turnstile functions, per Cloudflare documentation
  */ 
  turnstile: {
    render: (selector: string | HTMLElement, options: any) => string;
    reset: (widgetId?: string) => void;
    remove: (widgetId?: string) => void;
  };
}
}

const PUBLIC_KEY = '0x4AAAAAAA30n09B49oMBU_q';

interface TurnstileProps {  
  className?: string;
  onWidgetId?: (id: string) => void;  
  [key: string]: any; // Allow additional props
}

/* 
    A[Component Mounts] --> B[Create Script Tag]
    B --> C[Load Turnstile API]
    C --> D[Render Widget]
    D --> E[Return Widget ID]
    E --> F[Call onWidgetId]
    A --> G[Component Unmounts]
    G --> H[Remove Script] 
*/

export const Turnstile = ({ className, onWidgetId, ...rest }: TurnstileProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.defer = true;
    script.async = true;
    script.onload = () => {
      const widgetId = window.turnstile.render('#cf-turnstile', {
        sitekey: `${PUBLIC_KEY}`,
        theme: "dark"
      });
      if (onWidgetId) onWidgetId(widgetId);
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [onWidgetId]);

  /* Explicit render of Turnstile widget */
  
  return (
    <div
    id="cf-turnstile"
     className={classes(styles.turnstile, className)}     
      {...rest}      
    />
  );
};