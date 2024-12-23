import { useEffect } from 'react';
import { classes } from '~/utils/style';
import styles from './turnstile.module.css';


const PUBLIC_KEY = '0x4AAAAAAA30n09B49oMBU_q';

interface TurnstileProps {  
  className?: string;  
  [key: string]: any; // Allow additional props
}

export const Turnstile = ({ className, ...rest }: TurnstileProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
     className={classes(styles.turnstile, 'cf-turnstile', className)}
      data-sitekey={PUBLIC_KEY}
      data-theme="dark"
      {...rest}      
    />
  );
};