import { useEffect, useRef, useState } from 'react';
import { MenuButton, Icon, tokens, Transition, } from '../../components/Components';
import { useScrollToHash } from '../../hooks';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import { cssProps, msToNum, numToMs } from '../../utils/style';
import { NavToggle } from './nav-toggle';
import { navLinks, socialLinks } from './nav-data';

import styles from './menuBar.module.css';
import config from '../../config.json';


export const Navbar = () => {
      
  const [activeItem, setActiveItem] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();  
  const location = useLocation();  
  const headerRef = useRef();  
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

  // Check if a nav item should be active
  const getCurrent = (url = '') => {
    const nonTrailing = activeItem?.endsWith('/') ? activeItem?.slice(0, -1) : activeItem;

    if (url === nonTrailing) {
      return 'page';
    }

    return '';
  };

  // Store the current hash to scroll to
  const handleNavItemClick = event => {
    const hash = event.currentTarget.href.split('#')[1];
    setTarget(null);

    if (hash && location.pathname === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  const handleMobileNavClick = event => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };
  

  
    return (
    <header className={styles.navbar} ref={headerRef}>
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={location.pathname === '/' ? '/#intro' : '/'}
        data-navbar-item
        className={styles.logo}
        aria-label={`${config.name}, ${config.role}`}
        onClick={handleMobileNavClick}
      >
        
      </RouterLink>
      <NavToggle onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
      <nav className={styles.nav}>
        <div className={styles.navList}>
          {navLinks.map(({ label, pathname }) => (
            <RouterLink
              unstable_viewTransition
              prefetch="intent"
              to={pathname}
              key={label}
              data-navbar-item
              className={styles.navLink}
              aria-current={getCurrent(pathname)}
              onClick={handleNavItemClick}
            >
              {label}
            </RouterLink>
          ))}
        </div>
        <NavbarIcons desktop />
      </nav>
      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {({ visible, nodeRef }) => (
          <nav className={styles.mobileNav} data-visible={visible} ref={nodeRef}>
            {navLinks.map(({ label, pathname }, index) => (
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={pathname}
                key={label}
                className={styles.mobileNavLink}
                data-visible={visible}
                aria-current={getCurrent(pathname)}
                onClick={handleMobileNavClick}
                style={cssProps({
                  transitionDelay: numToMs(
                    Number(msToNum(tokens.base.durationS)) + index * 50
                  ),
                })}
              >
                {label}
              </RouterLink>
            ))}
            <NavbarIcons />            
          </nav>
        )}
      </Transition>      
    </header>
  );
};

const NavbarIcons = ({ desktop }) => (
  <div className={styles.navIcons}>
    {socialLinks.map(({ label, url, icon }) => (
      <a
        key={label}
        data-navbar-item={desktop || undefined}
        className={styles.navIconLink}
        aria-label={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={styles.navIcon} icon={icon} />
      </a>
    ))}
  </div>
);


/* OLD CODE

const handleClick = (item: MenuItem) => {
    if (onSelect) {
      onSelect(item);
    }
  };
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
    */