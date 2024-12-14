import { classes } from '../../utils/style';
import styles from './text.module.css';
import { ElementType, ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  size?: 's' | 'm' | 'l';
  as?: ElementType;
  align?: 'auto' | 'left' | 'center' | 'right';
  weight?: 'auto' | 'light' | 'regular' | 'medium' | 'bold';
  secondary?: boolean;
  className?: string;
  [key: string]: any; // Allow additional props
}

export const Text = ({
  children,
  size = 'm',
  as: Component = 'span',
  align = 'auto',
  weight = 'auto',
  secondary,
  className,
  ...rest
}: TextProps) => {
  return (
    <Component
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}
      data-secondary={secondary}
      {...rest}
    >
      {children}
    </Component>
  );
};