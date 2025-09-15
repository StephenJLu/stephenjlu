import { useEffect, useState } from 'react';
import keys from './keys.json';

declare global {
  interface Window {
    turnstile?: {
      render: (selector: string | HTMLElement, options: {
        sitekey: string;
        theme?: 'light' | 'dark' | 'auto';
        size?: 'normal' | 'compact' | 'flexible';        
        callback?: (token: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
      }) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;    
    };
  }
}

type TurnstileTheme = 'light' | 'dark' | 'auto';
type TurnstileSize = 'normal' | 'compact' | 'flexible';

interface TurnstileProps extends React.HTMLAttributes<HTMLDivElement> {  
  className?: string;
  onWidgetId?: (id: string) => void;
  success?: boolean;
  theme?: TurnstileTheme;
  size?: TurnstileSize;  
}

export const Turnstile = ({ 
  className, 
  onWidgetId, 
  success, 
  theme = 'dark',
  size = 'flexible',  
  ...rest 
}: TurnstileProps) => {
  const [widgetId, setWidgetId] = useState<string>();  

  useEffect(() => {    
    if (document.querySelector('script[src*="turnstile"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.defer = true;
    script.async = true;
    script.onload = () => {
      if (window.turnstile) {
        const id = window.turnstile.render('#cf-turnstile', {
          sitekey: keys.cft_public_key,
          theme,
          size          
        });
        setWidgetId(id);
        if (onWidgetId) onWidgetId(id);
      }
    };
    document.head.appendChild(script);
    
    return () => {      
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (success && widgetId && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  }, [success, widgetId]);   
  
  return (
    <div
      id="cf-turnstile"
      className={className}
      {...rest}      
    />
  );
};