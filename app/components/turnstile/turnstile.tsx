import { useEffect } from 'react';
import { classes } from '~/utils/style';
import styles from './turnstile.module.css';

declare global {
  interface Window {
  turnstile: {
    render: (selector: string | HTMLElement, options: any) => string;
    reset: (widgetId?: string) => void;
    remove: (widgetId: string) => void;
  };
}
}

const PUBLIC_KEY = '0x4AAAAAAA30n09B49oMBU_q';

interface TurnstileProps {  
  className?: string;
  onWidgetId?: (id: string) => void;  
  [key: string]: any; // Allow additional props
}

export const Turnstile = ({ className, onWidgetId, ...rest }: TurnstileProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
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

  return (
    <div
    id="cf-turnstile"
     className={classes(styles.turnstile, className)}     
      {...rest}      
    />
  );
};