import { Fragment, ReactNode } from 'react';
import { classes } from '../../utils/style';
import styles from './heading.module.css';

interface HeadingProps {
  children: ReactNode;
  level?: number;
  as?: keyof JSX.IntrinsicElements;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  className?: string;
  [key: string]: any; // To allow additional props
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}` as keyof JSX.IntrinsicElements;

  return (
    <Fragment>
      <Component
        className={classes(styles.heading, className)}
        data-align={align}
        data-weight={weight}
        data-level={clampedLevel}
        {...rest}
      >
        {children}
      </Component>
    </Fragment>
  );
};