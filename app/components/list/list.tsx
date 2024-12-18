import React from 'react';
import { classes } from '../../utils/style';
import styles from './list.module.css';

interface ListProps {
  ordered?: boolean;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

interface ListItemProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const List: React.FC<ListProps> = ({ 
  ordered = false, 
  children, 
  className, 
  ...rest 
}) => {
  const Element = ordered ? 'ol' : 'ul';

  return (
    <Element className={classes(styles.list, className)} {...rest}>
      {children}
    </Element>
  );
};

export const ListItem: React.FC<ListItemProps> = ({ 
  children, 
  ...rest 
}) => {
  return (
    <li className={styles.item} {...rest}>
      {children}
    </li>
  );
};