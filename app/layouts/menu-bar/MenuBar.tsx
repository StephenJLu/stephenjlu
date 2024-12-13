import React, { useEffect, useRef, useState } from 'react';
import { MenuButton, Icon, tokens, Transition, } from '../../components/Components';
import { useScrollToHash, useWindowSize } from '../../hooks/';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import { cssProps, media, msToNum, numToMs } from '../../utils/style';
import { NavToggle } from './nav-toggle';
import { navLinks, socialLinks } from './nav-data';

import styles from './menuBar.module.css';
import config from '../../config.json';

interface MenuItem {
  label: string;  
}

interface MenuBarProps {
  items: MenuItem[];
  backgroundColor: string;  
  onSelect: (item: MenuItem) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ items, backgroundColor, onSelect }) => {
    
  const theme = 'dark';
  const [activeItem, setActiveItem] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState<string | null>(null);  
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();

useEffect(() => {
    // Prevent ssr mismatch by storing this in state
    setActiveItem(`${location.pathname}${location.hash}`);
  }, [location]);

  // Handle smooth scroll nav items
  useEffect(() => {
    if (!target || location.pathname !== '/') return;
    setActiveItem(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);




  
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