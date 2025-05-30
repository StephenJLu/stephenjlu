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
  onClick: (item: MenuItem) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ item, isActive, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.menuButton} ${isActive ? styles.active : ''}`}
    >
      {item.label}
    </button>
  );
};

export default MenuButton;