import { useEffect, useRef, useState } from 'react';
import { MenuButton, Icon, themes, tokens, Transition, } from '../../components/Components';
import { useScrollToHash } from '../../hooks';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import { cssProps, msToNum, numToMs } from '../../utils/style';
import { NavToggle } from './nav-toggle';
import { navLinks, socialLinks } from './nav-data';
import styles from './menuBar.module.css';
import config from '../../config.json';

export const MenuBar = () => {      
  const [activeItem, setActiveItem] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();  
  const location = useLocation();  
  const headerRef = useRef();  
  const scrollToHash = useScrollToHash();
  const backgroundColor = (themes.dark.background);

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
    const nonTrailing = activeItem?.endsWith('/') ? activeItem.slice(0, -1) : activeItem;
    return url === nonTrailing ? 'page' : '';
  }; 

  // Handle navigation item click
  const handleNavItemClick = (event, item) => {
    const hash = event.currentTarget.href.split('#')[1];
    setTarget(null);
    setActiveItem(item.label);

    if (hash && location.pathname === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  // Handle mobile navigation item click
  const handleMobileNavClick = (event, item) => {
    handleNavItemClick(event, item);
    if (menuOpen) setMenuOpen(false);
  };
  
    return (
    <header className={styles.navbar} ref={headerRef}>
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={location.pathname === '/' ? '/#home' : '/'}
        data-navbar-item
        className={styles.logo}
        aria-label={`${config.name}, ${config.role}`}
        onClick={(event) => handleMobileNavClick(event, { label: 'Home', pathname: '/' })}
      >
        {/* Add your logo or monogram here */}
      </RouterLink>
      <NavToggle onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
<div
      className={styles.menuBarContainer}
      style={{ backgroundColor }}
      data-bs-theme="dark"
    >
     <nav className={styles.nav}>
          <ul className={styles.menuBarList}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <RouterLink
                  unstable_viewTransition
                  prefetch="intent"
                  to={item.pathname}
                  data-navbar-item
                  aria-current={getCurrent(item.pathname)}
                  onClick={(event) => handleNavItemClick(event, item)}
                  className={styles.navLink}
                >
            <MenuButton
                    item={item}
                    isActive={activeItem === item.label}
                    onClick={() => setActiveItem(item.label)}                    
                  />
                </RouterLink>
         </li>
            ))}
          </ul>
        </nav>
      </div>
      <NavbarIcons desktop />
      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {({ visible, nodeRef }) => (
          <nav className={styles.mobileNav} data-visible={visible} ref={nodeRef}>
            {navLinks.map((item, index) => (
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={item.pathname}
                key={item.label}
                className={styles.mobileNavLink}
                data-visible={visible}
                aria-current={getCurrent(item.pathname)}
                onClick={(event) => handleMobileNavClick(event, item)}
                style={cssProps({
                  transitionDelay: numToMs(
                    Number(msToNum(tokens.base.durationS)) + index * 50
                  ),
                })}
              >
                {item.label}
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

export default MenuBar;