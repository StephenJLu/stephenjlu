import React from 'react';
import styles from './menuBar.module.css';
import { MenuButton } from '../../components/Components';

interface MenuItem {
  label: string;  
}

interface MenuBarProps {
  items: MenuItem[];
  backgroundColor: string;
  activeItem: string;
  onSelect: (item: MenuItem) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ items, backgroundColor, onSelect, activeItem }) => {
    
  const handleClick = (item: MenuItem) => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div
      className={styles.menuBarContainer}      
      style={{ backgroundColor }}
      data-bs-theme="dark"
    >
      <nav className={styles.menuBar}>
        <ul className={styles.menuBarList}>
          {items.map((item, index) => (
            <MenuButton
              key={index}
              item={item}
              isActive={activeItem === item.label}
              onClick={handleClick}              
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};