import React, { forwardRef } from 'react';
import styles from './visually-hidden.module.css';
import { classes } from '../../utils/style';

interface VisuallyHiddenProps {
  className?: string;
  showOnFocus?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
  visible?: boolean;
  [key: string]: any;
}

export const VisuallyHidden = forwardRef<HTMLElement, VisuallyHiddenProps>(
  (
    { className, showOnFocus, as: Component = 'span', children, visible, ...rest },
    ref
  ) => {
    return (
      <Component
        className={classes(styles.hidden, className)}
        data-hidden={!visible && !showOnFocus}
        data-show-on-focus={showOnFocus}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';