import React from 'react';
import styles from './MenuButton.module.css';

export interface MenuItem {
  label: string;  
  action?: string;
  targetID?: string;
  url?: string;
}

interface MenuButtonProps {
  item: MenuItem;
  isActive?: boolean;   
}

const MenuButton: React.FC<MenuButtonProps> = ({ item, isActive }) => {
  
  
  
  return (
    <li>
      <button
        type="button"        
        className={`${styles.menuButton} ${isActive ? styles.active : ''}`}
      >
        {item.label}
      </button>
    </li>
  );
};

export default MenuButton;