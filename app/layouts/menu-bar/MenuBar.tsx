import { useEffect, useRef, useState } from 'react';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import MenuButton from '~/components/button/MenuButton';
import { Icon } from '~/components/icon/icon';
import { Monogram } from '~/components/monogram/monogram';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition/transition';
import { useScrollToHash } from '../../hooks';
import { cssProps, msToNum, numToMs } from '../../utils/style';
import { NavToggle } from './nav-toggle';
import { navLinks, socialLinks } from './nav-data';
import styles from './menuBar.module.css';
import config from '../../config.json';

interface NavItem {
  label: string;
  pathname: string;
}

interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

interface NavbarIconsProps {
  desktop?: boolean;
}

export const MenuBar = () => {
  const [activeItem, setActiveItem] = useState<string>();
  const [current, setCurrent] = useState<string>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);

  useEffect(() => {
    if (!target || location.pathname !== '/') return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);

  const getCurrent = (url = '') => {
    const nonTrailing = current?.endsWith('/') ? current.slice(0, -1) : current;

    if (url === nonTrailing) {
      return 'page';
    }

    return '';
  };

  const handleNavItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    const hash = event.currentTarget.href.split('#')[1];
    setTarget(null);
    setActiveItem(item.label);

    if (hash && location.pathname === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  const handleMobileNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    handleNavItemClick(event, item);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className={styles.navbar} ref={headerRef} data-theme="dark">
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={location.pathname === '/' ? '/#home' : '/'}
        data-navbar-item
        className={styles.logo}
        aria-label={`${config.name}, ${config.role}`}
        onClick={event => handleMobileNavClick(event, { label: 'Home', pathname: '/' })}
      >
        <Monogram />
      </RouterLink>
      <NavToggle onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
      <nav className={styles.nav}>
        <div className={styles.menuBarContainer}>
          <ul className={styles.menuBarList}>
            {(navLinks as NavItem[]).map((item, index) => (
              <li key={index}>
                <RouterLink
                  unstable_viewTransition
                  prefetch="intent"
                  to={item.pathname}
                  key={item.label}
                  data-navbar-item
                  className={styles.navLink}
                  aria-current={getCurrent(item.pathname)}
                  onClick={event => handleNavItemClick(event, item)}
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
        </div>
        <NavbarIcons desktop />
      </nav>
      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {({ visible, nodeRef }: { visible: boolean; nodeRef: React.RefObject<HTMLElement> }) => (
          <nav className={styles.mobileNav} data-visible={visible} ref={nodeRef}>
            {(navLinks as NavItem[]).map((item, index) => (
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={item.pathname}
                key={item.label}
                className={styles.mobileNavLink}
                data-visible={visible}
                aria-current={getCurrent(item.pathname)}
                onClick={event => handleMobileNavClick(event, item)}
                style={cssProps({
                  transitionDelay: numToMs(Number(msToNum(tokens.base.durationS)) + index * 50),
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

const NavbarIcons = ({ desktop }: NavbarIconsProps) => (
  <div className={styles.navIcons}>
    {(socialLinks as SocialLink[]).map(({ label, url, icon }) => (
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