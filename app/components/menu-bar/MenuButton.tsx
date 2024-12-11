import React from 'react';
import styles from './MenuButton.module.css';

export interface MenuItem {
  label: string;
  onClick?: () => void;
  action?: string;
  targetID?: string;
  url?: string;
}

interface MenuButtonProps {
  item: MenuItem;
  isActive?: boolean;
  onClick: (item: MenuItem) => void;  
}

const MenuButton: React.FC<MenuButtonProps> = ({ item, isActive }) => {
  
  const handleClick = () => {
    if (item.onClick) {
      item.onClick();
    }    
    if (item.action === 'scroll' && item.targetID) {
      const targetElement = document.getElementById(item.targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.action === 'open' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        className={`${styles.menuButton} ${isActive ? styles.active : ''}`}
      >
        {item.label}
      </button>
    </li>
  );
};

export default MenuButton;