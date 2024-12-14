import { classes } from '../../utils/style';
import styles from './icon.module.css';
import { forwardRef } from 'react';
import sprites from './icons.svg';

interface IconProps {
  icon: string;
  className?: string;
  size?: number;
  [key: string]: any;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ icon, className, size, ...rest }, ref) => {
  return (
    <svg
      aria-hidden
      ref={ref}
      className={classes(styles.icon, className)}
      width={size || 24}
      height={size || 24}
      {...rest}
    >
      <use href={`${sprites}#${icon}`} />
    </svg>
  );
});
