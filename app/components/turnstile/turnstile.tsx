import { useEffect, useRef, useState } from 'react';
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
  onTokenChange?: (token: string | null) => void;
  success?: boolean;
  theme?: TurnstileTheme;
  size?: TurnstileSize;  
}

export const Turnstile = ({ 
  className, 
  onWidgetId, 
  onTokenChange,
  success, 
  theme = 'dark',
  size = 'flexible',  
  ...rest 
}: TurnstileProps) => {
  const [widgetId, setWidgetId] = useState<string>();
  const widgetIdRef = useRef<string | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const onWidgetIdRef = useRef(onWidgetId);
  const onTokenChangeRef = useRef(onTokenChange);

  useEffect(() => {
    onWidgetIdRef.current = onWidgetId;
  }, [onWidgetId]);

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current || widgetIdRef.current) {
        return;
      }

      const id = window.turnstile.render(containerRef.current, {
        sitekey: keys.cft_public_key,
        theme,
        size,
        callback: (token: string) => {
          onTokenChangeRef.current?.(token);
        },
        'expired-callback': () => {
          onTokenChangeRef.current?.(null);
        },
        'error-callback': () => {
          onTokenChangeRef.current?.(null);
        },
      });

      widgetIdRef.current = id;
      setWidgetId(id);
      onWidgetIdRef.current?.(id);
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const existingScript = document.querySelector('script[src*="turnstile"]') as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', renderWidget);
      return () => {
        existingScript.removeEventListener('load', renderWidget);
      };
    }

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.defer = true;
    script.async = true;
    script.onload = renderWidget;
    document.head.appendChild(script);
    
    return () => {      
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [theme, size]);

  useEffect(() => {
    if (success && widgetId && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  }, [success, widgetId]);   
  
  return (
    <div
      id="cf-turnstile"
      ref={containerRef}
      className={className}
      {...rest}      
    />
  );
};