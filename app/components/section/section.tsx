import { forwardRef } from 'react';
import { classes } from '../../utils/style';
import styles from './section.module.css';

interface SectionProps {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ as: Component = 'div', children, className, ...rest }, ref) => (
    <Component className={classes(styles.section, className)} ref={ref} {...rest}>
      {children}
    </Component>
  )
);
