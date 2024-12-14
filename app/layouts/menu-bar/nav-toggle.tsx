import React from 'react';
import { Button, Icon } from '../../components/Components';
import styles from './nav-toggle.module.css';

interface NavToggleProps {
  menuOpen: boolean;
  [key: string]: any; // Allow additional props
}

export const NavToggle: React.FC<NavToggleProps> = ({ menuOpen, ...rest }) => {
  return (
    <Button
      iconOnly
      className={styles.toggle}
      aria-label="Menu"
      aria-expanded={menuOpen}
      {...rest}
    >
      <div className={styles.inner}>
        <Icon className={styles.icon} data-menu={true} data-open={menuOpen} icon="menu" />
        <Icon
          className={styles.icon}
          data-close={true}
          data-open={menuOpen}
          icon="close"
        />
      </div>
    </Button>
  );
};